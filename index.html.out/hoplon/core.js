// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14401_SHARP_,p2__14402_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14401_SHARP_,p2__14402_SHARP_.getAttribute("static-id"),p2__14402_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args14403 = [];
var len__8304__auto___14408 = arguments.length;
var i__8305__auto___14409 = (0);
while(true){
if((i__8305__auto___14409 < len__8304__auto___14408)){
args14403.push((arguments[i__8305__auto___14409]));

var G__14410 = (i__8305__auto___14409 + (1));
i__8305__auto___14409 = G__14410;
continue;
} else {
}
break;
}

var G__14405 = args14403.length;
switch (G__14405) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14403.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14406_14412 = init;
var G__14407_14413 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14406_14412,G__14407_14413) : f.call(null,G__14406_14412,G__14407_14413));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__14420 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__14421 = cljs.core.seq(vec__14420);
var first__14422 = cljs.core.first(seq__14421);
var seq__14421__$1 = cljs.core.next(seq__14421);
var f = first__14422;
var more = seq__14421__$1;
var vec__14423 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14423,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("e05d013f7ec4458aa6471ece0bafc84a")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__7191__auto__ = (function (){var and__7179__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__7179__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__7179__auto__;
}
})();
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
var G__14426 = (i + (1));
var G__14427 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__14426;
ret = G__14427;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__14429 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14429) : hoplon.core.$text.call(null,G__14429));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__14456 = new$__$1;
var vec__14458 = G__14456;
var seq__14459 = cljs.core.seq(vec__14458);
var first__14460 = cljs.core.first(seq__14459);
var seq__14459__$1 = cljs.core.next(seq__14459);
var x = first__14460;
var xs = seq__14459__$1;
var G__14457 = hoplon.core.child_vec(this$);
var vec__14461 = G__14457;
var seq__14462 = cljs.core.seq(vec__14461);
var first__14463 = cljs.core.first(seq__14462);
var seq__14462__$1 = cljs.core.next(seq__14462);
var k = first__14463;
var ks = seq__14462__$1;
var kids = vec__14461;
var G__14456__$1 = G__14456;
var G__14457__$1 = G__14457;
while(true){
var vec__14464 = G__14456__$1;
var seq__14465 = cljs.core.seq(vec__14464);
var first__14466 = cljs.core.first(seq__14465);
var seq__14465__$1 = cljs.core.next(seq__14465);
var x__$1 = first__14466;
var xs__$1 = seq__14465__$1;
var vec__14467 = G__14457__$1;
var seq__14468 = cljs.core.seq(vec__14467);
var first__14469 = cljs.core.first(seq__14468);
var seq__14468__$1 = cljs.core.next(seq__14468);
var k__$1 = first__14469;
var ks__$1 = seq__14468__$1;
var kids__$1 = vec__14467;
if(cljs.core.truth_((function (){var or__7191__auto__ = x__$1;
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
return k__$1;
}
})())){
var G__14470 = xs__$1;
var G__14471 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__14456__$1 = G__14470;
G__14457__$1 = G__14471;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_14474 = (function (){var G__14473 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14473) : cljs.core.atom.call(null,G__14473));
})();
this$__$1.hoplonKids = kids_14474;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14474,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_14477 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_14478 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_14477) : cljs.core.deref.call(null,kids_14477)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_14477,i_14478,x__$1,this$__$1){
return (function (p1__14476_SHARP_,p2__14475_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14477,cljs.core.assoc,i_14478,p2__14475_SHARP_);
});})(kids_14477,i_14478,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14477,cljs.core.assoc,i_14478,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14479_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14479_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14480_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__14480_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__14481_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14481_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14482 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14483 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14484 = (function (){var and__7179__auto__ = attr_14483;
if(cljs.core.truth_(and__7179__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_14483) : cljs.core.deref.call(null,attr_14483)),kk_14482);
} else {
return and__7179__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14484)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14483,cljs.core.assoc,kk_14482,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14485_SHARP_){
return p1__14485_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14486_SHARP_){
return p1__14486_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14487_SHARP_){
return p1__14487_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14488_SHARP_){
return p1__14488_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7860__auto__.call(null,this$,kvs));
} else {
var m__7860__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7860__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7860__auto__.call(null,this$,kvs));
} else {
var m__7860__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7860__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7860__auto__.call(null,this$,child));
} else {
var m__7860__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7860__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7860__auto__.call(null,this$,child));
} else {
var m__7860__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7860__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7860__auto__.call(null,this$,new$,existing));
} else {
var m__7860__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7860__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7859__auto__ = (((this$ == null))?null:this$);
var m__7860__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7859__auto__)]);
if(!((m__7860__auto__ == null))){
return (m__7860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7860__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7860__auto__.call(null,this$,new$,existing));
} else {
var m__7860__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7860__auto____$1 == null))){
return (m__7860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7860__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7860__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args14489 = [];
var len__8304__auto___14496 = arguments.length;
var i__8305__auto___14497 = (0);
while(true){
if((i__8305__auto___14497 < len__8304__auto___14496)){
args14489.push((arguments[i__8305__auto___14497]));

var G__14498 = (i__8305__auto___14497 + (1));
i__8305__auto___14497 = G__14498;
continue;
} else {
}
break;
}

var G__14495 = args14489.length;
switch (G__14495) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8323__auto__ = (new cljs.core.IndexedSeq(args14489.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8323__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14490){
var G__14491 = cljs.core.first(seq14490);
var seq14490__$1 = cljs.core.next(seq14490);
var G__14492 = cljs.core.first(seq14490__$1);
var seq14490__$2 = cljs.core.next(seq14490__$1);
var G__14493 = cljs.core.first(seq14490__$2);
var seq14490__$3 = cljs.core.next(seq14490__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14491,G__14492,G__14493,seq14490__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14500 = [];
var len__8304__auto___14507 = arguments.length;
var i__8305__auto___14508 = (0);
while(true){
if((i__8305__auto___14508 < len__8304__auto___14507)){
args14500.push((arguments[i__8305__auto___14508]));

var G__14509 = (i__8305__auto___14508 + (1));
i__8305__auto___14508 = G__14509;
continue;
} else {
}
break;
}

var G__14506 = args14500.length;
switch (G__14506) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8323__auto__ = (new cljs.core.IndexedSeq(args14500.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8323__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14501){
var G__14502 = cljs.core.first(seq14501);
var seq14501__$1 = cljs.core.next(seq14501);
var G__14503 = cljs.core.first(seq14501__$1);
var seq14501__$2 = cljs.core.next(seq14501__$1);
var G__14504 = cljs.core.first(seq14501__$2);
var seq14501__$3 = cljs.core.next(seq14501__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14502,G__14503,G__14504,seq14501__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((!(hoplon.core.is_ie8))?(function (p1__14511_SHARP_){
return (p1__14511_SHARP_ instanceof Node);
}):(function (p1__14512_SHARP_){
try{return p1__14512_SHARP_.nodeType;
}catch (e14513){if((e14513 instanceof Error)){
var _ = e14513;
return null;
} else {
throw e14513;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14514_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14514_SHARP_);
}catch (e14515){if((e14515 instanceof Error)){
var _ = e14515;
return null;
} else {
throw e14515;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14516_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14516_SHARP_);
}catch (e14517){if((e14517 instanceof Error)){
var _ = e14517;
return null;
} else {
throw e14517;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14518 = [];
var len__8304__auto___14522 = arguments.length;
var i__8305__auto___14523 = (0);
while(true){
if((i__8305__auto___14523 < len__8304__auto___14522)){
args14518.push((arguments[i__8305__auto___14523]));

var G__14524 = (i__8305__auto___14523 + (1));
i__8305__auto___14523 = G__14524;
continue;
} else {
}
break;
}

var G__14520 = args14518.length;
switch (G__14520) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14518.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14521){if((e14521 instanceof Error)){
var _ = e14521;
return not_found;
} else {
throw e14521;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14526 = [];
var len__8304__auto___14529 = arguments.length;
var i__8305__auto___14530 = (0);
while(true){
if((i__8305__auto___14530 < len__8304__auto___14529)){
args14526.push((arguments[i__8305__auto___14530]));

var G__14531 = (i__8305__auto___14530 + (1));
i__8305__auto___14530 = G__14531;
continue;
} else {
}
break;
}

var G__14528 = args14526.length;
switch (G__14528) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14526.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14549 = args;
var vec__14550 = G__14549;
var seq__14551 = cljs.core.seq(vec__14550);
var first__14552 = cljs.core.first(seq__14551);
var seq__14551__$1 = cljs.core.next(seq__14551);
var arg = first__14552;
var args__$1 = seq__14551__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14549__$1 = G__14549;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14553 = G__14549__$1;
var seq__14554 = cljs.core.seq(vec__14553);
var first__14555 = cljs.core.first(seq__14554);
var seq__14554__$1 = cljs.core.next(seq__14554);
var arg__$1 = first__14555;
var args__$2 = seq__14554__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14556 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14549__$1,attr__$2,kids__$2,vec__14553,seq__14554,first__14555,seq__14554__$1,arg__$1,args__$2,attr,kids,G__14549,vec__14550,seq__14551,first__14552,seq__14551__$1,arg,args__$1){
return (function (p1__14533_SHARP_,p2__14534_SHARP_,p3__14535_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14533_SHARP_,p2__14534_SHARP_,p3__14535_SHARP_);
});})(attr__$1,kids__$1,G__14549__$1,attr__$2,kids__$2,vec__14553,seq__14554,first__14555,seq__14554__$1,arg__$1,args__$2,attr,kids,G__14549,vec__14550,seq__14551,first__14552,seq__14551__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14557 = kids__$2;
var G__14558 = args__$2;
attr__$1 = G__14556;
kids__$1 = G__14557;
G__14549__$1 = G__14558;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__14559 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14560 = kids__$2;
var G__14561 = cljs.core.rest(args__$2);
attr__$1 = G__14559;
kids__$1 = G__14560;
G__14549__$1 = G__14561;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14562 = attr__$2;
var G__14563 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14564 = args__$2;
attr__$1 = G__14562;
kids__$1 = G__14563;
G__14549__$1 = G__14564;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14565 = attr__$2;
var G__14566 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14567 = args__$2;
attr__$1 = G__14565;
kids__$1 = G__14566;
G__14549__$1 = G__14567;
continue;
} else {
var G__14568 = attr__$2;
var G__14569 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14570 = args__$2;
attr__$1 = G__14568;
kids__$1 = G__14569;
G__14549__$1 = G__14570;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__14572_SHARP_,p2__14571_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__14571_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__14571_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14573){
var vec__14581 = p__14573;
var seq__14582 = cljs.core.seq(vec__14581);
var first__14583 = cljs.core.first(seq__14582);
var seq__14582__$1 = cljs.core.next(seq__14582);
var child_cell = first__14583;
var _ = seq__14582__$1;
var kids = vec__14581;
var this$__$1 = this$;
var seq__14584_14588 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14585_14589 = null;
var count__14586_14590 = (0);
var i__14587_14591 = (0);
while(true){
if((i__14587_14591 < count__14586_14590)){
var x_14592 = chunk__14585_14589.cljs$core$IIndexed$_nth$arity$2(null,i__14587_14591);
var temp__4657__auto___14593 = hoplon.core.__GT_node(x_14592);
if(cljs.core.truth_(temp__4657__auto___14593)){
var x_14594__$1 = temp__4657__auto___14593;
hoplon.core.append_child_BANG_(this$__$1,x_14594__$1);
} else {
}

var G__14595 = seq__14584_14588;
var G__14596 = chunk__14585_14589;
var G__14597 = count__14586_14590;
var G__14598 = (i__14587_14591 + (1));
seq__14584_14588 = G__14595;
chunk__14585_14589 = G__14596;
count__14586_14590 = G__14597;
i__14587_14591 = G__14598;
continue;
} else {
var temp__4657__auto___14599 = cljs.core.seq(seq__14584_14588);
if(temp__4657__auto___14599){
var seq__14584_14600__$1 = temp__4657__auto___14599;
if(cljs.core.chunked_seq_QMARK_(seq__14584_14600__$1)){
var c__8010__auto___14601 = cljs.core.chunk_first(seq__14584_14600__$1);
var G__14602 = cljs.core.chunk_rest(seq__14584_14600__$1);
var G__14603 = c__8010__auto___14601;
var G__14604 = cljs.core.count(c__8010__auto___14601);
var G__14605 = (0);
seq__14584_14588 = G__14602;
chunk__14585_14589 = G__14603;
count__14586_14590 = G__14604;
i__14587_14591 = G__14605;
continue;
} else {
var x_14606 = cljs.core.first(seq__14584_14600__$1);
var temp__4657__auto___14607__$1 = hoplon.core.__GT_node(x_14606);
if(cljs.core.truth_(temp__4657__auto___14607__$1)){
var x_14608__$1 = temp__4657__auto___14607__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14608__$1);
} else {
}

var G__14609 = cljs.core.next(seq__14584_14600__$1);
var G__14610 = null;
var G__14611 = (0);
var G__14612 = (0);
seq__14584_14588 = G__14609;
chunk__14585_14589 = G__14610;
count__14586_14590 = G__14611;
i__14587_14591 = G__14612;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__14645__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14614 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614,(1),null);
var G__14617 = this$;
hoplon.core.add_attributes_BANG_(G__14617,attr);

hoplon.core.add_children_BANG_(G__14617,kids);

return G__14617;
};
var G__14645 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14646__i = 0, G__14646__a = new Array(arguments.length -  1);
while (G__14646__i < G__14646__a.length) {G__14646__a[G__14646__i] = arguments[G__14646__i + 1]; ++G__14646__i;}
  args = new cljs.core.IndexedSeq(G__14646__a,0);
} 
return G__14645__delegate.call(this,self__,args);};
G__14645.cljs$lang$maxFixedArity = 1;
G__14645.cljs$lang$applyTo = (function (arglist__14647){
var self__ = cljs.core.first(arglist__14647);
var args = cljs.core.rest(arglist__14647);
return G__14645__delegate(self__,args);
});
G__14645.cljs$core$IFn$_invoke$arity$variadic = G__14645__delegate;
return G__14645;
})()
;

Element.prototype.apply = (function (self__,args14613){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14613)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14648__delegate = function (args){
var this$ = this;
var vec__14618 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14618,(1),null);
var G__14621 = this$;
hoplon.core.add_attributes_BANG_(G__14621,attr);

hoplon.core.add_children_BANG_(G__14621,kids);

return G__14621;
};
var G__14648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14649__i = 0, G__14649__a = new Array(arguments.length -  0);
while (G__14649__i < G__14649__a.length) {G__14649__a[G__14649__i] = arguments[G__14649__i + 0]; ++G__14649__i;}
  args = new cljs.core.IndexedSeq(G__14649__a,0);
} 
return G__14648__delegate.call(this,args);};
G__14648.cljs$lang$maxFixedArity = 0;
G__14648.cljs$lang$applyTo = (function (arglist__14650){
var args = cljs.core.seq(arglist__14650);
return G__14648__delegate(args);
});
G__14648.cljs$core$IFn$_invoke$arity$variadic = G__14648__delegate;
return G__14648;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__14622 = cljs.core.seq(kvs);
var chunk__14624 = null;
var count__14625 = (0);
var i__14626 = (0);
while(true){
if((i__14626 < count__14625)){
var vec__14628 = chunk__14624.cljs$core$IIndexed$_nth$arity$2(null,i__14626);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14628,(1),null);
var k_14651__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14651__$1);
} else {
e.attr(k_14651__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14651__$1:v));
}

var G__14652 = seq__14622;
var G__14653 = chunk__14624;
var G__14654 = count__14625;
var G__14655 = (i__14626 + (1));
seq__14622 = G__14652;
chunk__14624 = G__14653;
count__14625 = G__14654;
i__14626 = G__14655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14622);
if(temp__4657__auto__){
var seq__14622__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14622__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__14622__$1);
var G__14656 = cljs.core.chunk_rest(seq__14622__$1);
var G__14657 = c__8010__auto__;
var G__14658 = cljs.core.count(c__8010__auto__);
var G__14659 = (0);
seq__14622 = G__14656;
chunk__14624 = G__14657;
count__14625 = G__14658;
i__14626 = G__14659;
continue;
} else {
var vec__14631 = cljs.core.first(seq__14622__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14631,(1),null);
var k_14660__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14660__$1);
} else {
e.attr(k_14660__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14660__$1:v));
}

var G__14661 = cljs.core.next(seq__14622__$1);
var G__14662 = null;
var G__14663 = (0);
var G__14664 = (0);
seq__14622 = G__14661;
chunk__14624 = G__14662;
count__14625 = G__14663;
i__14626 = G__14664;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__14634 = cljs.core.seq(kvs);
var chunk__14635 = null;
var count__14636 = (0);
var i__14637 = (0);
while(true){
if((i__14637 < count__14636)){
var vec__14638 = chunk__14635.cljs$core$IIndexed$_nth$arity$2(null,i__14637);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14665 = seq__14634;
var G__14666 = chunk__14635;
var G__14667 = count__14636;
var G__14668 = (i__14637 + (1));
seq__14634 = G__14665;
chunk__14635 = G__14666;
count__14636 = G__14667;
i__14637 = G__14668;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14634);
if(temp__4657__auto__){
var seq__14634__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14634__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__14634__$1);
var G__14669 = cljs.core.chunk_rest(seq__14634__$1);
var G__14670 = c__8010__auto__;
var G__14671 = cljs.core.count(c__8010__auto__);
var G__14672 = (0);
seq__14634 = G__14669;
chunk__14635 = G__14670;
count__14636 = G__14671;
i__14637 = G__14672;
continue;
} else {
var vec__14641 = cljs.core.first(seq__14634__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14641,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14673 = cljs.core.next(seq__14634__$1);
var G__14674 = null;
var G__14675 = (0);
var G__14676 = (0);
seq__14634 = G__14673;
chunk__14635 = G__14674;
count__14636 = G__14675;
i__14637 = G__14676;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14644){if((e14644 instanceof Error)){
var _ = e14644;
return null;
} else {
throw e14644;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__14683__delegate = function (args){
var vec__14680 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14680,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = "";

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14684__i = 0, G__14684__a = new Array(arguments.length -  0);
while (G__14684__i < G__14684__a.length) {G__14684__a[G__14684__i] = arguments[G__14684__i + 0]; ++G__14684__i;}
  args = new cljs.core.IndexedSeq(G__14684__a,0);
} 
return G__14683__delegate.call(this,args);};
G__14683.cljs$lang$maxFixedArity = 0;
G__14683.cljs$lang$applyTo = (function (arglist__14685){
var args = cljs.core.seq(arglist__14685);
return G__14683__delegate(args);
});
G__14683.cljs$core$IFn$_invoke$arity$variadic = G__14683__delegate;
return G__14683;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__14686__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__14686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14687__i = 0, G__14687__a = new Array(arguments.length -  0);
while (G__14687__i < G__14687__a.length) {G__14687__a[G__14687__i] = arguments[G__14687__i + 0]; ++G__14687__i;}
  args = new cljs.core.IndexedSeq(G__14687__a,0);
} 
return G__14686__delegate.call(this,args);};
G__14686.cljs$lang$maxFixedArity = 0;
G__14686.cljs$lang$applyTo = (function (arglist__14688){
var args = cljs.core.seq(arglist__14688);
return G__14686__delegate(args);
});
G__14686.cljs$core$IFn$_invoke$arity$variadic = G__14686__delegate;
return G__14686;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8311__auto__ = [];
var len__8304__auto___14693 = arguments.length;
var i__8305__auto___14694 = (0);
while(true){
if((i__8305__auto___14694 < len__8304__auto___14693)){
args__8311__auto__.push((arguments[i__8305__auto___14694]));

var G__14695 = (i__8305__auto___14694 + (1));
i__8305__auto___14694 = G__14695;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((0) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8312__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__14690 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14690,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14689){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14689));
});

hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14696_SHARP_){
return document.createTextNode(p1__14696_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14697_SHARP_){
return document.createComment(p1__14697_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__14701 = (function (){
var G__14702 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14703 = (0);
return setTimeout(G__14702,G__14703);
});
return jQuery(G__14701);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__14704_SHARP_){
var e = (function (){var G__14705 = p1__14704_SHARP_.target;
return jQuery(G__14705);
})();
if(cljs.core.truth_((function (){var or__7191__auto__ = e.attr("action");
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__14704_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args14706 = [];
var len__8304__auto___14709 = arguments.length;
var i__8305__auto___14710 = (0);
while(true){
if((i__8305__auto___14710 < len__8304__auto___14709)){
args14706.push((arguments[i__8305__auto___14710]));

var G__14711 = (i__8305__auto___14710 + (1));
i__8305__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var G__14708 = args14706.length;
switch (G__14708) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14706.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args14713 = [];
var len__8304__auto___14716 = arguments.length;
var i__8305__auto___14717 = (0);
while(true){
if((i__8305__auto___14717 < len__8304__auto___14716)){
args14713.push((arguments[i__8305__auto___14717]));

var G__14718 = (i__8305__auto___14717 + (1));
i__8305__auto___14717 = G__14718;
continue;
} else {
}
break;
}

var G__14715 = args14713.length;
switch (G__14715) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14713.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;

if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8124__auto__ = (function (){var G__14720 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14720) : cljs.core.atom.call(null,G__14720));
})();
var prefer_table__8125__auto__ = (function (){var G__14721 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14721) : cljs.core.atom.call(null,G__14721));
})();
var method_cache__8126__auto__ = (function (){var G__14722 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14722) : cljs.core.atom.call(null,G__14722));
})();
var cached_hierarchy__8127__auto__ = (function (){var G__14723 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14723) : cljs.core.atom.call(null,G__14723));
})();
var hierarchy__8128__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__,hierarchy__8128__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__,hierarchy__8128__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8128__auto__,method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14724 = elem;
var G__14725 = cljs.core.cst$kw$attr;
var G__14726 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14724,G__14725,G__14726) : hoplon.core.do_BANG_.call(null,G__14724,G__14725,G__14726));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__14727__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__14727 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14728__i = 0, G__14728__a = new Array(arguments.length -  2);
while (G__14728__i < G__14728__a.length) {G__14728__a[G__14728__i] = arguments[G__14728__i + 2]; ++G__14728__i;}
  args = new cljs.core.IndexedSeq(G__14728__a,0);
} 
return G__14727__delegate.call(this,elem,_,args);};
G__14727.cljs$lang$maxFixedArity = 2;
G__14727.cljs$lang$applyTo = (function (arglist__14729){
var elem = cljs.core.first(arglist__14729);
arglist__14729 = cljs.core.next(arglist__14729);
var _ = cljs.core.first(arglist__14729);
var args = cljs.core.rest(arglist__14729);
return G__14727__delegate(elem,_,args);
});
G__14727.cljs$core$IFn$_invoke$arity$variadic = G__14727__delegate;
return G__14727;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__14730_SHARP_){
return cljs.core.zipmap(p1__14730_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__14731 = cljs.core.seq(clmap);
var chunk__14732 = null;
var count__14733 = (0);
var i__14734 = (0);
while(true){
if((i__14734 < count__14733)){
var vec__14735 = chunk__14732.cljs$core$IIndexed$_nth$arity$2(null,i__14734);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14735,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14741 = seq__14731;
var G__14742 = chunk__14732;
var G__14743 = count__14733;
var G__14744 = (i__14734 + (1));
seq__14731 = G__14741;
chunk__14732 = G__14742;
count__14733 = G__14743;
i__14734 = G__14744;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14731);
if(temp__4657__auto__){
var seq__14731__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14731__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__14731__$1);
var G__14745 = cljs.core.chunk_rest(seq__14731__$1);
var G__14746 = c__8010__auto__;
var G__14747 = cljs.core.count(c__8010__auto__);
var G__14748 = (0);
seq__14731 = G__14745;
chunk__14732 = G__14746;
count__14733 = G__14747;
i__14734 = G__14748;
continue;
} else {
var vec__14738 = cljs.core.first(seq__14731__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14749 = cljs.core.next(seq__14731__$1);
var G__14750 = null;
var G__14751 = (0);
var G__14752 = (0);
seq__14731 = G__14749;
chunk__14732 = G__14750;
count__14733 = G__14751;
i__14734 = G__14752;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__14753 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14754 = (0);
return setTimeout(G__14753,G__14754);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14755_14761 = elem;
var G__14756_14762 = cljs.core.cst$kw$focus;
var G__14757_14763 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14755_14761,G__14756_14762,G__14757_14763) : hoplon.core.do_BANG_.call(null,G__14755_14761,G__14756_14762,G__14757_14763));

var G__14758 = elem;
var G__14759 = cljs.core.cst$kw$select;
var G__14760 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14758,G__14759,G__14760) : hoplon.core.do_BANG_.call(null,G__14758,G__14759,G__14760));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__8124__auto__ = (function (){var G__14764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14764) : cljs.core.atom.call(null,G__14764));
})();
var prefer_table__8125__auto__ = (function (){var G__14765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14765) : cljs.core.atom.call(null,G__14765));
})();
var method_cache__8126__auto__ = (function (){var G__14766 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14766) : cljs.core.atom.call(null,G__14766));
})();
var cached_hierarchy__8127__auto__ = (function (){var G__14767 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14767) : cljs.core.atom.call(null,G__14767));
})();
var hierarchy__8128__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__,hierarchy__8128__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__,hierarchy__8128__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8128__auto__,method_table__8124__auto__,prefer_table__8125__auto__,method_cache__8126__auto__,cached_hierarchy__8127__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__14768 = this$__$1.target;
return jQuery(G__14768);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__14783 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14783) : cljs.core.atom.call(null,G__14783));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14784,G__14785){
return (G__14784.cljs$core$IFn$_invoke$arity$1 ? G__14784.cljs$core$IFn$_invoke$arity$1(G__14785) : G__14784.call(null,G__14785));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14769_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14788,G__14787,G__14786){
return (G__14786.cljs$core$IFn$_invoke$arity$2 ? G__14786.cljs$core$IFn$_invoke$arity$2(G__14787,G__14788) : G__14786.call(null,G__14787,G__14788));
});})(on_deck,items_seq))
).call(null,p1__14769_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14770_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14770_SHARP_) : cljs.core.deref.call(null,p1__14770_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14770_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14789 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14790 = null;
var count__14791 = (0);
var i__14792 = (0);
while(true){
if((i__14792 < count__14791)){
var i = chunk__14790.cljs$core$IIndexed$_nth$arity$2(null,i__14792);
var e_14795 = (function (){var or__7191__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
var G__14793 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14793) : tpl.call(null,G__14793));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14795);

var G__14796 = seq__14789;
var G__14797 = chunk__14790;
var G__14798 = count__14791;
var G__14799 = (i__14792 + (1));
seq__14789 = G__14796;
chunk__14790 = G__14797;
count__14791 = G__14798;
i__14792 = G__14799;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14789);
if(temp__4657__auto__){
var seq__14789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14789__$1)){
var c__8010__auto__ = cljs.core.chunk_first(seq__14789__$1);
var G__14800 = cljs.core.chunk_rest(seq__14789__$1);
var G__14801 = c__8010__auto__;
var G__14802 = cljs.core.count(c__8010__auto__);
var G__14803 = (0);
seq__14789 = G__14800;
chunk__14790 = G__14801;
count__14791 = G__14802;
i__14792 = G__14803;
continue;
} else {
var i = cljs.core.first(seq__14789__$1);
var e_14804 = (function (){var or__7191__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
var G__14794 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14794) : tpl.call(null,G__14794));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14804);

var G__14805 = cljs.core.next(seq__14789__$1);
var G__14806 = null;
var G__14807 = (0);
var G__14808 = (0);
seq__14789 = G__14805;
chunk__14790 = G__14806;
count__14791 = G__14807;
i__14792 = G__14808;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__8114__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8114__auto__)){
var e_14809 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14809);

var G__14810 = (_ + (1));
_ = G__14810;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__8311__auto__ = [];
var len__8304__auto___14821 = arguments.length;
var i__8305__auto___14822 = (0);
while(true){
if((i__8305__auto___14822 < len__8304__auto___14821)){
args__8311__auto__.push((arguments[i__8305__auto___14822]));

var G__14823 = (i__8305__auto___14822 + (1));
i__8305__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((0) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8312__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14812){
var vec__14813 = p__14812;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14813,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14813,default$){
return (function (G__14816,G__14818,G__14817){
var or__7191__auto__ = (function (){var and__7179__auto__ = (G__14816.cljs$core$IFn$_invoke$arity$1 ? G__14816.cljs$core$IFn$_invoke$arity$1(G__14817) : G__14816.call(null,G__14817));
if(cljs.core.truth_(and__7179__auto__)){
return G__14817;
} else {
return and__7179__auto__;
}
})();
if(cljs.core.truth_(or__7191__auto__)){
return or__7191__auto__;
} else {
return G__14818;
}
});})(c,vec__14813,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__14813,default$){
return (function (){
var G__14819 = c;
var G__14820 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14819,G__14820) : cljs.core.reset_BANG_.call(null,G__14819,G__14820));
});})(_,c,vec__14813,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14811){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14811));
});

