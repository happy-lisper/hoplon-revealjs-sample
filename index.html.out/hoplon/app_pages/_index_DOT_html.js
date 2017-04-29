// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.reveal');
goog.require('javelin.core');
goog.require('hoplon.core');
/**
 * number => [[base-10-digit bit-list]+]
 *   e.g 53 => [[5 [false true false false]] [3 [true false false false]]]
 */
hoplon.app_pages._index_DOT_html.n__GT_bits = (function hoplon$app_pages$_index_DOT_html$n__GT_bits(n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (digit){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$digit,digit,cljs.core.cst$kw$bits,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14999_SHARP_){
return ((digit & (1 << p1__14999_SHARP_)) != 0);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(0)], null))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(n,(10)),cljs.core.mod(n,(10))], null));
});
/**
 * binary cock model, takes a js/Date
 */
hoplon.app_pages._index_DOT_html.time__GT_model = (function hoplon$app_pages$_index_DOT_html$time__GT_model(time){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hours,hoplon.app_pages._index_DOT_html.n__GT_bits(time.getHours()),cljs.core.cst$kw$minutes,hoplon.app_pages._index_DOT_html.n__GT_bits(time.getMinutes()),cljs.core.cst$kw$seconds,hoplon.app_pages._index_DOT_html.n__GT_bits(time.getSeconds())], null);
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.led = (function() { 
var hoplon$app_pages$_index_DOT_html$led__delegate = function (args__14260__auto__){
var vec__15009 = hoplon.core.parse_args(args__14260__auto__);
var map__15012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(0),null);
var map__15012__$1 = ((((!((map__15012 == null)))?((((map__15012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15012):map__15012);
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15012__$1,cljs.core.cst$kw$on);
var G__15014 = cljs.core.cst$kw$class;
var G__15015 = javelin.core.formula(((function (G__15014,vec__15009,map__15012,map__15012__$1,on){
return (function (G__15017,G__15016){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$unit,true,cljs.core.cst$kw$on,G__15016,cljs.core.cst$kw$off,(G__15017.cljs$core$IFn$_invoke$arity$1 ? G__15017.cljs$core$IFn$_invoke$arity$1(G__15016) : G__15017.call(null,G__15016))], null);
});})(G__15014,vec__15009,map__15012,map__15012__$1,on))
).call(null,cljs.core.not,on);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__15014,G__15015) : hoplon.core.div.call(null,G__15014,G__15015));
};
var hoplon$app_pages$_index_DOT_html$led = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__15018__i = 0, G__15018__a = new Array(arguments.length -  0);
while (G__15018__i < G__15018__a.length) {G__15018__a[G__15018__i] = arguments[G__15018__i + 0]; ++G__15018__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__15018__a,0);
} 
return hoplon$app_pages$_index_DOT_html$led__delegate.call(this,args__14260__auto__);};
hoplon$app_pages$_index_DOT_html$led.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$led.cljs$lang$applyTo = (function (arglist__15019){
var args__14260__auto__ = cljs.core.seq(arglist__15019);
return hoplon$app_pages$_index_DOT_html$led__delegate(args__14260__auto__);
});
hoplon$app_pages$_index_DOT_html$led.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$led__delegate;
return hoplon$app_pages$_index_DOT_html$led;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.column = (function() { 
var hoplon$app_pages$_index_DOT_html$column__delegate = function (args__14260__auto__){
var vec__15039 = hoplon.core.parse_args(args__14260__auto__);
var map__15042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(0),null);
var map__15042__$1 = ((((!((map__15042 == null)))?((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15042):map__15042);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$model);
var G__15044 = cljs.core.cst$kw$class;
var G__15045 = "col";
var G__15046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.led,cljs.core.cst$kw$on),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model){
return (function (p1__15020_SHARP_){
return javelin.core.formula(((function (G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model){
return (function (G__15048,G__15047,G__15049){
var G__15050 = cljs.core.cst$kw$bits.cljs$core$IFn$_invoke$arity$1(G__15048);
var G__15051 = G__15049;
return (G__15047.cljs$core$IFn$_invoke$arity$2 ? G__15047.cljs$core$IFn$_invoke$arity$2(G__15050,G__15051) : G__15047.call(null,G__15050,G__15051));
});})(G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model))
).call(null,model,cljs.core.nth,p1__15020_SHARP_);
});})(G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$bits.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(model) : cljs.core.deref.call(null,model))))))),(function (){var G__15052 = cljs.core.cst$kw$class;
var G__15053 = "unit";
var G__15054 = (function (){var t__14359__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__14359__auto__,G__15052,G__15053,G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model){
return (function (G__15056,G__15055){
return G__15055.nodeValue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$digit.cljs$core$IFn$_invoke$arity$1(G__15056))].join('');
});})(t__14359__auto__,G__15052,G__15053,G__15044,G__15045,vec__15039,map__15042,map__15042__$1,model))
).call(null,model,t__14359__auto__);

return t__14359__auto__;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15052,G__15053,G__15054) : hoplon.core.div.call(null,G__15052,G__15053,G__15054));
})());
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15044,G__15045,G__15046) : hoplon.core.div.call(null,G__15044,G__15045,G__15046));
};
var hoplon$app_pages$_index_DOT_html$column = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__15057__i = 0, G__15057__a = new Array(arguments.length -  0);
while (G__15057__i < G__15057__a.length) {G__15057__a[G__15057__i] = arguments[G__15057__i + 0]; ++G__15057__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__15057__a,0);
} 
return hoplon$app_pages$_index_DOT_html$column__delegate.call(this,args__14260__auto__);};
hoplon$app_pages$_index_DOT_html$column.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$column.cljs$lang$applyTo = (function (arglist__15058){
var args__14260__auto__ = cljs.core.seq(arglist__15058);
return hoplon$app_pages$_index_DOT_html$column__delegate(args__14260__auto__);
});
hoplon$app_pages$_index_DOT_html$column.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$column__delegate;
return hoplon$app_pages$_index_DOT_html$column;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.column_pair = (function() { 
var hoplon$app_pages$_index_DOT_html$column_pair__delegate = function (args__14260__auto__){
var vec__15072 = hoplon.core.parse_args(args__14260__auto__);
var map__15075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15072,(0),null);
var map__15075__$1 = ((((!((map__15075 == null)))?((((map__15075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15075):map__15075);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15075__$1,cljs.core.cst$kw$model);
var G__15077 = cljs.core.cst$kw$class;
var G__15078 = "colpair";
var G__15079 = hoplon.app_pages._index_DOT_html.column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$model,javelin.core.formula(((function (G__15077,G__15078,vec__15072,map__15075,map__15075__$1,model){
return (function (G__15081,G__15082){
return (G__15081.cljs$core$IFn$_invoke$arity$1 ? G__15081.cljs$core$IFn$_invoke$arity$1(G__15082) : G__15081.call(null,G__15082));
});})(G__15077,G__15078,vec__15072,map__15075,map__15075__$1,model))
).call(null,cljs.core.first,model)], 0));
var G__15080 = hoplon.app_pages._index_DOT_html.column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$model,javelin.core.formula(((function (G__15077,G__15078,G__15079,vec__15072,map__15075,map__15075__$1,model){
return (function (G__15084,G__15083){
return (G__15083.cljs$core$IFn$_invoke$arity$1 ? G__15083.cljs$core$IFn$_invoke$arity$1(G__15084) : G__15083.call(null,G__15084));
});})(G__15077,G__15078,G__15079,vec__15072,map__15075,map__15075__$1,model))
).call(null,model,cljs.core.second)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__15077,G__15078,G__15079,G__15080) : hoplon.core.div.call(null,G__15077,G__15078,G__15079,G__15080));
};
var hoplon$app_pages$_index_DOT_html$column_pair = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__15085__i = 0, G__15085__a = new Array(arguments.length -  0);
while (G__15085__i < G__15085__a.length) {G__15085__a[G__15085__i] = arguments[G__15085__i + 0]; ++G__15085__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__15085__a,0);
} 
return hoplon$app_pages$_index_DOT_html$column_pair__delegate.call(this,args__14260__auto__);};
hoplon$app_pages$_index_DOT_html$column_pair.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$column_pair.cljs$lang$applyTo = (function (arglist__15086){
var args__14260__auto__ = cljs.core.seq(arglist__15086);
return hoplon$app_pages$_index_DOT_html$column_pair__delegate(args__14260__auto__);
});
hoplon$app_pages$_index_DOT_html$column_pair.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$column_pair__delegate;
return hoplon$app_pages$_index_DOT_html$column_pair;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.clock = (function() { 
var hoplon$app_pages$_index_DOT_html$clock__delegate = function (args__14260__auto__){
var vec__15106 = hoplon.core.parse_args(args__14260__auto__);
var map__15109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15106,(0),null);
var map__15109__$1 = ((((!((map__15109 == null)))?((((map__15109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15109):map__15109);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15109__$1,cljs.core.cst$kw$time);
var legend = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15109__$1,cljs.core.cst$kw$legend,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(4),(2),(1)], null));
var G__15111 = (function (){var G__15115 = cljs.core.cst$kw$class;
var G__15116 = "col legend";
var G__15117 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__15115,G__15116,vec__15106,map__15109,map__15109__$1,time,legend){
return (function (p1__15087_SHARP_){
var G__15118 = cljs.core.cst$kw$class;
var G__15119 = "unit";
var G__15120 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15087_SHARP_)].join('');
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15118,G__15119,G__15120) : hoplon.core.div.call(null,G__15118,G__15119,G__15120));
});})(G__15115,G__15116,vec__15106,map__15109,map__15109__$1,time,legend))
,legend);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15115,G__15116,G__15117) : hoplon.core.div.call(null,G__15115,G__15116,G__15117));
})();
var G__15112 = hoplon.app_pages._index_DOT_html.column_pair.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$model,javelin.core.formula(((function (G__15111,vec__15106,map__15109,map__15109__$1,time,legend){
return (function (G__15121){
return cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__15121);
});})(G__15111,vec__15106,map__15109,map__15109__$1,time,legend))
).call(null,time)], 0));
var G__15113 = hoplon.app_pages._index_DOT_html.column_pair.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$model,javelin.core.formula(((function (G__15111,G__15112,vec__15106,map__15109,map__15109__$1,time,legend){
return (function (G__15122){
return cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__15122);
});})(G__15111,G__15112,vec__15106,map__15109,map__15109__$1,time,legend))
).call(null,time)], 0));
var G__15114 = hoplon.app_pages._index_DOT_html.column_pair.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$model,javelin.core.formula(((function (G__15111,G__15112,G__15113,vec__15106,map__15109,map__15109__$1,time,legend){
return (function (G__15123){
return cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__15123);
});})(G__15111,G__15112,G__15113,vec__15106,map__15109,map__15109__$1,time,legend))
).call(null,time)], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__15111,G__15112,G__15113,G__15114) : hoplon.core.div.call(null,G__15111,G__15112,G__15113,G__15114));
};
var hoplon$app_pages$_index_DOT_html$clock = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__15124__i = 0, G__15124__a = new Array(arguments.length -  0);
while (G__15124__i < G__15124__a.length) {G__15124__a[G__15124__i] = arguments[G__15124__i + 0]; ++G__15124__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__15124__a,0);
} 
return hoplon$app_pages$_index_DOT_html$clock__delegate.call(this,args__14260__auto__);};
hoplon$app_pages$_index_DOT_html$clock.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$clock.cljs$lang$applyTo = (function (arglist__15125){
var args__14260__auto__ = cljs.core.seq(arglist__15125);
return hoplon$app_pages$_index_DOT_html$clock__delegate(args__14260__auto__);
});
hoplon$app_pages$_index_DOT_html$clock.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$clock__delegate;
return hoplon$app_pages$_index_DOT_html$clock;
})()
;
hoplon.app_pages._index_DOT_html.periodic_cell = (function hoplon$app_pages$_index_DOT_html$periodic_cell(thunk,interval){
var v = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null)));
var G__15130_15134 = ((function (v){
return (function (){
var G__15132 = v;
var G__15133 = (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15132,G__15133) : cljs.core.reset_BANG_.call(null,G__15132,G__15133));
});})(v))
;
var G__15131_15135 = interval;
setInterval(G__15130_15134,G__15131_15135);

return v;
});
hoplon.reveal.slideshow.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$theme,"sky",(function (){var G__15136 = cljs.core.cst$kw$rel;
var G__15137 = "stylesheet";
var G__15138 = cljs.core.cst$kw$href;
var G__15139 = "clock.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__15136,G__15137,G__15138,G__15139) : hoplon.core.link.call(null,G__15136,G__15137,G__15138,G__15139));
})(),hoplon.reveal.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Quicklist") : hoplon.core.h2.call(null,"Quicklist")),(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(hoplon.core.h4.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h4.cljs$core$IFn$_invoke$arity$1("subtitle") : hoplon.core.h4.call(null,"subtitle"))], null),hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([hoplon.reveal.quicklist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["item 1","item 2","item 3","item 4"], 0))], 0))], 0)),hoplon.reveal.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Binary Clock") : hoplon.core.h2.call(null,"Binary Clock")),(hoplon.core.hr.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.hr.cljs$core$IFn$_invoke$arity$0() : hoplon.core.hr.call(null)),(function (){var model = hoplon.app_pages._index_DOT_html.periodic_cell((function (){
return hoplon.app_pages._index_DOT_html.time__GT_model((new Date()));
}),(1000));
return hoplon.app_pages._index_DOT_html.clock.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$time,model], 0));
})()], null)], 0))], 0));
