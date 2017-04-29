// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__13837 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13835_SHARP_,p2__13836_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13835_SHARP_,p2__13836_SHARP_,p2__13836_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13837;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e13839){if((e13839 instanceof Error)){
var _ = e13839;
return null;
} else {
throw e13839;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13842 = c;
javelin.core.add_sync_BANG_(G__13842);

return G__13842;
} else {
var G__13843 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13843));

return G__13843;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__8311__auto__ = [];
var len__8304__auto___13854 = arguments.length;
var i__8305__auto___13855 = (0);
while(true){
if((i__8305__auto___13855 < len__8304__auto___13854)){
args__8311__auto__.push((arguments[i__8305__auto___13855]));

var G__13856 = (i__8305__auto___13855 + (1));
i__8305__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((1) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8312__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13846){
var vec__13847 = p__13846;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13847,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13850 = cljs.core.seq(srcs);
var chunk__13851 = null;
var count__13852 = (0);
var i__13853 = (0);
while(true){
if((i__13853 < count__13852)){
var src = chunk__13851.cljs$core$IIndexed$_nth$arity$2(null,i__13853);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13857 = seq__13850;
var G__13858 = chunk__13851;
var G__13859 = count__13852;
var G__13860 = (i__13853 + (1));
seq__13850 = G__13857;
chunk__13851 = G__13858;
count__13852 = G__13859;
i__13853 = G__13860;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13850);
if(temp__4657__auto__){
var seq__13850__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13850__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__13850__$1);
var G__13861 = cljs.core.chunk_rest(seq__13850__$1);
var G__13862 = c__8010__auto__;
var G__13863 = cljs.core.count(c__8010__auto__);
var G__13864 = (0);
seq__13850 = G__13861;
chunk__13851 = G__13862;
count__13852 = G__13863;
i__13853 = G__13864;
continue;
} else {
var src = cljs.core.first(seq__13850__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13865 = cljs.core.next(seq__13850__$1);
var G__13866 = null;
var G__13867 = (0);
var G__13868 = (0);
seq__13850 = G__13865;
chunk__13851 = G__13866;
count__13852 = G__13867;
i__13853 = G__13868;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13844){
var G__13845 = cljs.core.first(seq13844);
var seq13844__$1 = cljs.core.next(seq13844);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13845,seq13844__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__8311__auto__ = [];
var len__8304__auto___13889 = arguments.length;
var i__8305__auto___13890 = (0);
while(true){
if((i__8305__auto___13890 < len__8304__auto___13889)){
args__8311__auto__.push((arguments[i__8305__auto___13890]));

var G__13891 = (i__8305__auto___13890 + (1));
i__8305__auto___13890 = G__13891;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((1) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8312__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13873){
var vec__13874 = p__13873;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13874,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13874,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13877_13892 = cljs.core.seq(this$.sources);
var chunk__13878_13893 = null;
var count__13879_13894 = (0);
var i__13880_13895 = (0);
while(true){
if((i__13880_13895 < count__13879_13894)){
var source_13896 = chunk__13878_13893.cljs$core$IIndexed$_nth$arity$2(null,i__13880_13895);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13896) : javelin.core.cell_QMARK_.call(null,source_13896)))){
source_13896.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13896.sinks,this$);

if((source_13896.rank > this$.rank)){
var seq__13881_13897 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13877_13892,chunk__13878_13893,count__13879_13894,i__13880_13895,source_13896,vec__13874,f,sources){
return (function (p1__13869_SHARP_){
return p1__13869_SHARP_.sinks;
});})(seq__13877_13892,chunk__13878_13893,count__13879_13894,i__13880_13895,source_13896,vec__13874,f,sources))
,source_13896));
var chunk__13882_13898 = null;
var count__13883_13899 = (0);
var i__13884_13900 = (0);
while(true){
if((i__13884_13900 < count__13883_13899)){
var dep_13901 = chunk__13882_13898.cljs$core$IIndexed$_nth$arity$2(null,i__13884_13900);
dep_13901.rank = javelin.core.next_rank();

var G__13902 = seq__13881_13897;
var G__13903 = chunk__13882_13898;
var G__13904 = count__13883_13899;
var G__13905 = (i__13884_13900 + (1));
seq__13881_13897 = G__13902;
chunk__13882_13898 = G__13903;
count__13883_13899 = G__13904;
i__13884_13900 = G__13905;
continue;
} else {
var temp__4657__auto___13906 = cljs.core.seq(seq__13881_13897);
if(temp__4657__auto___13906){
var seq__13881_13907__$1 = temp__4657__auto___13906;
if(cljs.core.chunked_seq_QMARK_(seq__13881_13907__$1)){
var c__8010__auto___13908 = cljs.core.chunk_first(seq__13881_13907__$1);
var G__13909 = cljs.core.chunk_rest(seq__13881_13907__$1);
var G__13910 = c__8010__auto___13908;
var G__13911 = cljs.core.count(c__8010__auto___13908);
var G__13912 = (0);
seq__13881_13897 = G__13909;
chunk__13882_13898 = G__13910;
count__13883_13899 = G__13911;
i__13884_13900 = G__13912;
continue;
} else {
var dep_13913 = cljs.core.first(seq__13881_13907__$1);
dep_13913.rank = javelin.core.next_rank();

var G__13914 = cljs.core.next(seq__13881_13907__$1);
var G__13915 = null;
var G__13916 = (0);
var G__13917 = (0);
seq__13881_13897 = G__13914;
chunk__13882_13898 = G__13915;
count__13883_13899 = G__13916;
i__13884_13900 = G__13917;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13918 = seq__13877_13892;
var G__13919 = chunk__13878_13893;
var G__13920 = count__13879_13894;
var G__13921 = (i__13880_13895 + (1));
seq__13877_13892 = G__13918;
chunk__13878_13893 = G__13919;
count__13879_13894 = G__13920;
i__13880_13895 = G__13921;
continue;
} else {
var temp__4657__auto___13922 = cljs.core.seq(seq__13877_13892);
if(temp__4657__auto___13922){
var seq__13877_13923__$1 = temp__4657__auto___13922;
if(cljs.core.chunked_seq_QMARK_(seq__13877_13923__$1)){
var c__8010__auto___13924 = cljs.core.chunk_first(seq__13877_13923__$1);
var G__13925 = cljs.core.chunk_rest(seq__13877_13923__$1);
var G__13926 = c__8010__auto___13924;
var G__13927 = cljs.core.count(c__8010__auto___13924);
var G__13928 = (0);
seq__13877_13892 = G__13925;
chunk__13878_13893 = G__13926;
count__13879_13894 = G__13927;
i__13880_13895 = G__13928;
continue;
} else {
var source_13929 = cljs.core.first(seq__13877_13923__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13929) : javelin.core.cell_QMARK_.call(null,source_13929)))){
source_13929.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13929.sinks,this$);

if((source_13929.rank > this$.rank)){
var seq__13885_13930 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13877_13892,chunk__13878_13893,count__13879_13894,i__13880_13895,source_13929,seq__13877_13923__$1,temp__4657__auto___13922,vec__13874,f,sources){
return (function (p1__13869_SHARP_){
return p1__13869_SHARP_.sinks;
});})(seq__13877_13892,chunk__13878_13893,count__13879_13894,i__13880_13895,source_13929,seq__13877_13923__$1,temp__4657__auto___13922,vec__13874,f,sources))
,source_13929));
var chunk__13886_13931 = null;
var count__13887_13932 = (0);
var i__13888_13933 = (0);
while(true){
if((i__13888_13933 < count__13887_13932)){
var dep_13934 = chunk__13886_13931.cljs$core$IIndexed$_nth$arity$2(null,i__13888_13933);
dep_13934.rank = javelin.core.next_rank();

var G__13935 = seq__13885_13930;
var G__13936 = chunk__13886_13931;
var G__13937 = count__13887_13932;
var G__13938 = (i__13888_13933 + (1));
seq__13885_13930 = G__13935;
chunk__13886_13931 = G__13936;
count__13887_13932 = G__13937;
i__13888_13933 = G__13938;
continue;
} else {
var temp__4657__auto___13939__$1 = cljs.core.seq(seq__13885_13930);
if(temp__4657__auto___13939__$1){
var seq__13885_13940__$1 = temp__4657__auto___13939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13885_13940__$1)){
var c__8010__auto___13941 = cljs.core.chunk_first(seq__13885_13940__$1);
var G__13942 = cljs.core.chunk_rest(seq__13885_13940__$1);
var G__13943 = c__8010__auto___13941;
var G__13944 = cljs.core.count(c__8010__auto___13941);
var G__13945 = (0);
seq__13885_13930 = G__13942;
chunk__13886_13931 = G__13943;
count__13887_13932 = G__13944;
i__13888_13933 = G__13945;
continue;
} else {
var dep_13946 = cljs.core.first(seq__13885_13940__$1);
dep_13946.rank = javelin.core.next_rank();

var G__13947 = cljs.core.next(seq__13885_13940__$1);
var G__13948 = null;
var G__13949 = (0);
var G__13950 = (0);
seq__13885_13930 = G__13947;
chunk__13886_13931 = G__13948;
count__13887_13932 = G__13949;
i__13888_13933 = G__13950;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13951 = cljs.core.next(seq__13877_13923__$1);
var G__13952 = null;
var G__13953 = (0);
var G__13954 = (0);
seq__13877_13892 = G__13951;
chunk__13878_13893 = G__13952;
count__13879_13894 = G__13953;
i__13880_13895 = G__13954;
continue;
}
} else {
}
}
break;
}

var compute_13955 = ((function (vec__13874,f,sources){
return (function (p1__13870_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13870_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13870_SHARP_)));
});})(vec__13874,f,sources))
;
this$.thunk = ((function (compute_13955,vec__13874,f,sources){
return (function (){
return this$.state = compute_13955(this$.sources);
});})(compute_13955,vec__13874,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13871){
var G__13872 = cljs.core.first(seq13871);
var seq13871__$1 = cljs.core.next(seq13871);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13872,seq13871__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13956 = this$__$1;
var G__13957 = (function (){var G__13958 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13958) : f.call(null,G__13958));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13956,G__13957) : cljs.core.reset_BANG_.call(null,G__13956,G__13957));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13959 = this$__$1;
var G__13960 = (function (){var G__13961 = this$__$1.state;
var G__13962 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13961,G__13962) : f.call(null,G__13961,G__13962));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13959,G__13960) : cljs.core.reset_BANG_.call(null,G__13959,G__13960));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13963 = this$__$1;
var G__13964 = (function (){var G__13965 = this$__$1.state;
var G__13966 = a;
var G__13967 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13965,G__13966,G__13967) : f.call(null,G__13965,G__13966,G__13967));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13963,G__13964) : cljs.core.reset_BANG_.call(null,G__13963,G__13964));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13968 = this$__$1;
var G__13969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13968,G__13969) : cljs.core.reset_BANG_.call(null,G__13968,G__13969));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13970 = cljs.core.seq(self__.watches);
var chunk__13971 = null;
var count__13972 = (0);
var i__13973 = (0);
while(true){
if((i__13973 < count__13972)){
var vec__13974 = chunk__13971.cljs$core$IIndexed$_nth$arity$2(null,i__13973);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13974,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13980 = seq__13970;
var G__13981 = chunk__13971;
var G__13982 = count__13972;
var G__13983 = (i__13973 + (1));
seq__13970 = G__13980;
chunk__13971 = G__13981;
count__13972 = G__13982;
i__13973 = G__13983;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13970);
if(temp__4657__auto__){
var seq__13970__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13970__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__13970__$1);
var G__13984 = cljs.core.chunk_rest(seq__13970__$1);
var G__13985 = c__8010__auto__;
var G__13986 = cljs.core.count(c__8010__auto__);
var G__13987 = (0);
seq__13970 = G__13984;
chunk__13971 = G__13985;
count__13972 = G__13986;
i__13973 = G__13987;
continue;
} else {
var vec__13977 = cljs.core.first(seq__13970__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13988 = cljs.core.next(seq__13970__$1);
var G__13989 = null;
var G__13990 = (0);
var G__13991 = (0);
seq__13970 = G__13988;
chunk__13971 = G__13989;
count__13972 = G__13990;
i__13973 = G__13991;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7802__auto__,writer__7803__auto__,opt__7804__auto__){
return cljs.core._write(writer__7803__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__7179__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__7179__auto__)){
return c.thunk;
} else {
return and__7179__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__7179__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__7179__auto__)){
return c.update;
} else {
return and__7179__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__7179__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__7179__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__7179__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13994__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13993 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13993) : javelin.core.cell.call(null,G__13993));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13994 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13995__i = 0, G__13995__a = new Array(arguments.length -  0);
while (G__13995__i < G__13995__a.length) {G__13995__a[G__13995__i] = arguments[G__13995__i + 0]; ++G__13995__i;}
  sources = new cljs.core.IndexedSeq(G__13995__a,0);
} 
return G__13994__delegate.call(this,sources);};
G__13994.cljs$lang$maxFixedArity = 0;
G__13994.cljs$lang$applyTo = (function (arglist__13996){
var sources = cljs.core.seq(arglist__13996);
return G__13994__delegate(sources);
});
G__13994.cljs$core$IFn$_invoke$arity$variadic = G__13994__delegate;
return G__13994;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13997 = [];
var len__8304__auto___14005 = arguments.length;
var i__8305__auto___14006 = (0);
while(true){
if((i__8305__auto___14006 < len__8304__auto___14005)){
args13997.push((arguments[i__8305__auto___14006]));

var G__14007 = (i__8305__auto___14006 + (1));
i__8305__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var G__14001 = args13997.length;
switch (G__14001) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8323__auto__ = (new cljs.core.IndexedSeq(args13997.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8323__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14002){
var map__14003 = p__14002;
var map__14003__$1 = ((((!((map__14003 == null)))?((((map__14003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14003):map__14003);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13998){
var G__13999 = cljs.core.first(seq13998);
var seq13998__$1 = cljs.core.next(seq13998);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13999,seq13998__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__14009_SHARP_){
var _STAR_tx_STAR_14013 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__14014 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14014) : cljs.core.atom.call(null,G__14014));
})();

try{return (p1__14009_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__14009_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__14009_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_14013;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_14015 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_14015;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__8311__auto__ = [];
var len__8304__auto___14023 = arguments.length;
var i__8305__auto___14024 = (0);
while(true){
if((i__8305__auto___14024 < len__8304__auto___14023)){
args__8311__auto__.push((arguments[i__8305__auto___14024]));

var G__14025 = (i__8305__auto___14024 + (1));
i__8305__auto___14024 = G__14025;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((0) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8312__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__14022 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14022) : cljs.core.atom.call(null,G__14022));
})();
var tag_neq = ((function (olds){
return (function (p1__14016_SHARP_,p2__14017_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__14016_SHARP_,p2__14017_SHARP_),p2__14017_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__14019_SHARP_,p2__14018_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__14019_SHARP_,p2__14018_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__14026__delegate = function (rest__14020_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__14020_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__14020_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__14020_SHARP_));

return news;
};
var G__14026 = function (var_args){
var rest__14020_SHARP_ = null;
if (arguments.length > 0) {
var G__14027__i = 0, G__14027__a = new Array(arguments.length -  0);
while (G__14027__i < G__14027__a.length) {G__14027__a[G__14027__i] = arguments[G__14027__i + 0]; ++G__14027__i;}
  rest__14020_SHARP_ = new cljs.core.IndexedSeq(G__14027__a,0);
} 
return G__14026__delegate.call(this,rest__14020_SHARP_);};
G__14026.cljs$lang$maxFixedArity = 0;
G__14026.cljs$lang$applyTo = (function (arglist__14028){
var rest__14020_SHARP_ = cljs.core.seq(arglist__14028);
return G__14026__delegate(rest__14020_SHARP_);
});
G__14026.cljs$core$IFn$_invoke$arity$variadic = G__14026__delegate;
return G__14026;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq14021){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14021));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__14029_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__14029_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__14030_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__14030_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__14037_14043 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__14038_14044 = null;
var count__14039_14045 = (0);
var i__14040_14046 = (0);
while(true){
if((i__14040_14046 < count__14039_14045)){
var i_14047 = chunk__14038_14044.cljs$core$IIndexed$_nth$arity$2(null,i__14040_14046);
var G__14041_14048 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_14047) : ith_item__$1.call(null,i_14047));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14041_14048) : f__$1.call(null,G__14041_14048));

var G__14049 = seq__14037_14043;
var G__14050 = chunk__14038_14044;
var G__14051 = count__14039_14045;
var G__14052 = (i__14040_14046 + (1));
seq__14037_14043 = G__14049;
chunk__14038_14044 = G__14050;
count__14039_14045 = G__14051;
i__14040_14046 = G__14052;
continue;
} else {
var temp__4657__auto___14053 = cljs.core.seq(seq__14037_14043);
if(temp__4657__auto___14053){
var seq__14037_14054__$1 = temp__4657__auto___14053;
if(cljs.core.chunked_seq_QMARK_(seq__14037_14054__$1)){
var c__8010__auto___14055 = cljs.core.chunk_first(seq__14037_14054__$1);
var G__14056 = cljs.core.chunk_rest(seq__14037_14054__$1);
var G__14057 = c__8010__auto___14055;
var G__14058 = cljs.core.count(c__8010__auto___14055);
var G__14059 = (0);
seq__14037_14043 = G__14056;
chunk__14038_14044 = G__14057;
count__14039_14045 = G__14058;
i__14040_14046 = G__14059;
continue;
} else {
var i_14060 = cljs.core.first(seq__14037_14054__$1);
var G__14042_14061 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_14060) : ith_item__$1.call(null,i_14060));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14042_14061) : f__$1.call(null,G__14042_14061));

var G__14062 = cljs.core.next(seq__14037_14054__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__14037_14043 = G__14062;
chunk__14038_14044 = G__14063;
count__14039_14045 = G__14064;
i__14040_14046 = G__14065;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
