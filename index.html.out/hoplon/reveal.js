// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.reveal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.reveal.is_text_QMARK_ = (function hoplon$reveal$is_text_QMARK_(children){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children),(1))) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(children).nodeType,(1))));
});
hoplon.reveal.url = (function hoplon$reveal$url(href){
var G__14828 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,href], null);
var G__14829 = href;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$2(G__14828,G__14829) : hoplon.core.a.call(null,G__14828,G__14829));
});
/**
 * @param {...*} var_args
 */
hoplon.reveal.markdown_slide = (function() { 
var hoplon$reveal$markdown_slide__delegate = function (args__14260__auto__){
var vec__14838 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(1),null);
var G__14841 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_markdown,""], null)], 0));
var G__14842 = (function (){var G__14843 = cljs.core.cst$kw$type;
var G__14844 = "text/template";
var G__14845 = children;
return (hoplon.core.script.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$3(G__14843,G__14844,G__14845) : hoplon.core.script.call(null,G__14843,G__14844,G__14845));
})();
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$2(G__14841,G__14842) : hoplon.core.section.call(null,G__14841,G__14842));
};
var hoplon$reveal$markdown_slide = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14846__i = 0, G__14846__a = new Array(arguments.length -  0);
while (G__14846__i < G__14846__a.length) {G__14846__a[G__14846__i] = arguments[G__14846__i + 0]; ++G__14846__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14846__a,0);
} 
return hoplon$reveal$markdown_slide__delegate.call(this,args__14260__auto__);};
hoplon$reveal$markdown_slide.cljs$lang$maxFixedArity = 0;
hoplon$reveal$markdown_slide.cljs$lang$applyTo = (function (arglist__14847){
var args__14260__auto__ = cljs.core.seq(arglist__14847);
return hoplon$reveal$markdown_slide__delegate(args__14260__auto__);
});
hoplon$reveal$markdown_slide.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$markdown_slide__delegate;
return hoplon$reveal$markdown_slide;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.intro_title = (function() { 
var hoplon$reveal$intro_title__delegate = function (args__14260__auto__){
var vec__14851 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14851,(1),null);
if(cljs.core.truth_(hoplon.reveal.is_text_QMARK_(children))){
return children;
} else {
return children;
}
};
var hoplon$reveal$intro_title = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14854__i = 0, G__14854__a = new Array(arguments.length -  0);
while (G__14854__i < G__14854__a.length) {G__14854__a[G__14854__i] = arguments[G__14854__i + 0]; ++G__14854__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14854__a,0);
} 
return hoplon$reveal$intro_title__delegate.call(this,args__14260__auto__);};
hoplon$reveal$intro_title.cljs$lang$maxFixedArity = 0;
hoplon$reveal$intro_title.cljs$lang$applyTo = (function (arglist__14855){
var args__14260__auto__ = cljs.core.seq(arglist__14855);
return hoplon$reveal$intro_title__delegate(args__14260__auto__);
});
hoplon$reveal$intro_title.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$intro_title__delegate;
return hoplon$reveal$intro_title;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.chapter_title = (function() { 
var hoplon$reveal$chapter_title__delegate = function (args__14260__auto__){
var vec__14859 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(1),null);
if(cljs.core.truth_(hoplon.reveal.is_text_QMARK_(children))){
return children;
} else {
return children;
}
};
var hoplon$reveal$chapter_title = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14862__i = 0, G__14862__a = new Array(arguments.length -  0);
while (G__14862__i < G__14862__a.length) {G__14862__a[G__14862__i] = arguments[G__14862__i + 0]; ++G__14862__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14862__a,0);
} 
return hoplon$reveal$chapter_title__delegate.call(this,args__14260__auto__);};
hoplon$reveal$chapter_title.cljs$lang$maxFixedArity = 0;
hoplon$reveal$chapter_title.cljs$lang$applyTo = (function (arglist__14863){
var args__14260__auto__ = cljs.core.seq(arglist__14863);
return hoplon$reveal$chapter_title__delegate(args__14260__auto__);
});
hoplon$reveal$chapter_title.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$chapter_title__delegate;
return hoplon$reveal$chapter_title;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.slide_title = (function() { 
var hoplon$reveal$slide_title__delegate = function (args__14260__auto__){
var vec__14867 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(1),null);
if(cljs.core.truth_(hoplon.reveal.is_text_QMARK_(children))){
return children;
} else {
return children;
}
};
var hoplon$reveal$slide_title = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14870__i = 0, G__14870__a = new Array(arguments.length -  0);
while (G__14870__i < G__14870__a.length) {G__14870__a[G__14870__i] = arguments[G__14870__i + 0]; ++G__14870__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14870__a,0);
} 
return hoplon$reveal$slide_title__delegate.call(this,args__14260__auto__);};
hoplon$reveal$slide_title.cljs$lang$maxFixedArity = 0;
hoplon$reveal$slide_title.cljs$lang$applyTo = (function (arglist__14871){
var args__14260__auto__ = cljs.core.seq(arglist__14871);
return hoplon$reveal$slide_title__delegate(args__14260__auto__);
});
hoplon$reveal$slide_title.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$slide_title__delegate;
return hoplon$reveal$slide_title;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.slide = (function() { 
var hoplon$reveal$slide__delegate = function (args__14260__auto__){
var vec__14877 = hoplon.core.parse_args(args__14260__auto__);
var map__14880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(0),null);
var map__14880__$1 = ((((!((map__14880 == null)))?((((map__14880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14880):map__14880);
var attrs = map__14880__$1;
var markdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,cljs.core.cst$kw$markdown);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,cljs.core.cst$kw$title);
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,cljs.core.cst$kw$background);
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,cljs.core.cst$kw$transition);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(1),null);
var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$markdown,cljs.core.array_seq([cljs.core.cst$kw$title,cljs.core.cst$kw$background,cljs.core.cst$kw$transition], 0));
var attrs__$2 = (cljs.core.truth_(background)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$data_DASH_background,background):attrs__$1);
var attrs__$3 = (cljs.core.truth_(transition)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$2,cljs.core.cst$kw$data_DASH_transition,transition):attrs__$2);
var children__$1 = (cljs.core.truth_(title)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.reveal.slide_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([title], 0))], null),children):children);
if(cljs.core.truth_(markdown)){
return hoplon.reveal.markdown_slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs__$3,children__$1], 0));
} else {
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$2(attrs__$3,children__$1) : hoplon.core.section.call(null,attrs__$3,children__$1));
}
};
var hoplon$reveal$slide = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14882__i = 0, G__14882__a = new Array(arguments.length -  0);
while (G__14882__i < G__14882__a.length) {G__14882__a[G__14882__i] = arguments[G__14882__i + 0]; ++G__14882__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14882__a,0);
} 
return hoplon$reveal$slide__delegate.call(this,args__14260__auto__);};
hoplon$reveal$slide.cljs$lang$maxFixedArity = 0;
hoplon$reveal$slide.cljs$lang$applyTo = (function (arglist__14883){
var args__14260__auto__ = cljs.core.seq(arglist__14883);
return hoplon$reveal$slide__delegate(args__14260__auto__);
});
hoplon$reveal$slide.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$slide__delegate;
return hoplon$reveal$slide;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.chapter = (function() { 
var hoplon$reveal$chapter__delegate = function (args__14260__auto__){
var vec__14889 = hoplon.core.parse_args(args__14260__auto__);
var map__14892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(0),null);
var map__14892__$1 = ((((!((map__14892 == null)))?((((map__14892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14892):map__14892);
var attrs = map__14892__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14892__$1,cljs.core.cst$kw$title);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14889,(1),null);
if(cljs.core.empty_QMARK_(title)){
return hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,children], 0));
} else {
return hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([hoplon.reveal.chapter_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([title], 0))], 0))], null),children)], 0));
}
};
var hoplon$reveal$chapter = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14894__i = 0, G__14894__a = new Array(arguments.length -  0);
while (G__14894__i < G__14894__a.length) {G__14894__a[G__14894__i] = arguments[G__14894__i + 0]; ++G__14894__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14894__a,0);
} 
return hoplon$reveal$chapter__delegate.call(this,args__14260__auto__);};
hoplon$reveal$chapter.cljs$lang$maxFixedArity = 0;
hoplon$reveal$chapter.cljs$lang$applyTo = (function (arglist__14895){
var args__14260__auto__ = cljs.core.seq(arglist__14895);
return hoplon$reveal$chapter__delegate(args__14260__auto__);
});
hoplon$reveal$chapter.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$chapter__delegate;
return hoplon$reveal$chapter;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.intro = (function() { 
var hoplon$reveal$intro__delegate = function (args__14260__auto__){
var vec__14901 = hoplon.core.parse_args(args__14260__auto__);
var map__14904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(0),null);
var map__14904__$1 = ((((!((map__14904 == null)))?((((map__14904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14904):map__14904);
var attrs = map__14904__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14904__$1,cljs.core.cst$kw$title);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(1),null);
if(cljs.core.empty_QMARK_(title)){
return hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,children], 0));
} else {
return hoplon.reveal.slide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.reveal.intro_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([title], 0))], null),children)], 0));
}
};
var hoplon$reveal$intro = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14906__i = 0, G__14906__a = new Array(arguments.length -  0);
while (G__14906__i < G__14906__a.length) {G__14906__a[G__14906__i] = arguments[G__14906__i + 0]; ++G__14906__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14906__a,0);
} 
return hoplon$reveal$intro__delegate.call(this,args__14260__auto__);};
hoplon$reveal$intro.cljs$lang$maxFixedArity = 0;
hoplon$reveal$intro.cljs$lang$applyTo = (function (arglist__14907){
var args__14260__auto__ = cljs.core.seq(arglist__14907);
return hoplon$reveal$intro__delegate(args__14260__auto__);
});
hoplon$reveal$intro.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$intro__delegate;
return hoplon$reveal$intro;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.slideshow = (function() { 
var hoplon$reveal$slideshow__delegate = function (args__14260__auto__){
var vec__14936 = hoplon.core.parse_args(args__14260__auto__);
var map__14939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14936,(0),null);
var map__14939__$1 = ((((!((map__14939 == null)))?((((map__14939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14939):map__14939);
var attrs = map__14939__$1;
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14939__$1,cljs.core.cst$kw$theme,"default");
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14936,(1),null);
hoplon.core.add_initfn_BANG_(((function (vec__14936,map__14939,map__14939__$1,attrs,theme,children){
return (function (){
return Reveal.initialize(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,true,cljs.core.cst$kw$dependencies,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"reveal.js/plugin/markdown/marked.js"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"reveal.js/plugin/markdown/markdown.js"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"reveal.js/plugin/highlight/highlight.js",cljs.core.cst$kw$async,true,cljs.core.cst$kw$callback,((function (vec__14936,map__14939,map__14939__$1,attrs,theme,children){
return (function (){
return hljs.initHighlightingOnLoad();
});})(vec__14936,map__14939,map__14939__$1,attrs,theme,children))
], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"reveal.js/plugin/notes/notes.js",cljs.core.cst$kw$async,true], null)], null)], null)));
});})(vec__14936,map__14939,map__14939__$1,attrs,theme,children))
);

return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.head.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$0() : hoplon.core.head.call(null)),(function (){var G__14941 = (function (){var G__14942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$theme),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"reveal"], null)], 0));
var G__14943 = (function (){var G__14947 = cljs.core.cst$kw$rel;
var G__14948 = "stylesheet";
var G__14949 = cljs.core.cst$kw$href;
var G__14950 = "reveal.js/css/reveal.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14947,G__14948,G__14949,G__14950) : hoplon.core.link.call(null,G__14947,G__14948,G__14949,G__14950));
})();
var G__14944 = (function (){var G__14951 = cljs.core.cst$kw$rel;
var G__14952 = "stylesheet";
var G__14953 = cljs.core.cst$kw$href;
var G__14954 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("reveal.js/css/theme/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".css")].join('');
var G__14955 = cljs.core.cst$kw$id;
var G__14956 = "theme";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14951,G__14952,G__14953,G__14954,G__14955,G__14956) : hoplon.core.link.call(null,G__14951,G__14952,G__14953,G__14954,G__14955,G__14956));
})();
var G__14945 = (function (){var G__14957 = cljs.core.cst$kw$rel;
var G__14958 = "stylesheet";
var G__14959 = cljs.core.cst$kw$href;
var G__14960 = "reveal.js/plugin/highlight/github.min.css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__14957,G__14958,G__14959,G__14960) : hoplon.core.link.call(null,G__14957,G__14958,G__14959,G__14960));
})();
var G__14946 = (function (){var G__14961 = cljs.core.cst$kw$class;
var G__14962 = "slides";
var G__14963 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14961,G__14962,G__14963) : hoplon.core.div.call(null,G__14961,G__14962,G__14963));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14942,G__14943,G__14944,G__14945,G__14946) : hoplon.core.div.call(null,G__14942,G__14943,G__14944,G__14945,G__14946));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__14941) : hoplon.core.body.call(null,G__14941));
})()], 0));
};
var hoplon$reveal$slideshow = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14964__i = 0, G__14964__a = new Array(arguments.length -  0);
while (G__14964__i < G__14964__a.length) {G__14964__a[G__14964__i] = arguments[G__14964__i + 0]; ++G__14964__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14964__a,0);
} 
return hoplon$reveal$slideshow__delegate.call(this,args__14260__auto__);};
hoplon$reveal$slideshow.cljs$lang$maxFixedArity = 0;
hoplon$reveal$slideshow.cljs$lang$applyTo = (function (arglist__14965){
var args__14260__auto__ = cljs.core.seq(arglist__14965);
return hoplon$reveal$slideshow__delegate(args__14260__auto__);
});
hoplon$reveal$slideshow.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$slideshow__delegate;
return hoplon$reveal$slideshow;
})()
;
hoplon.reveal.bullet = hoplon.core.div;
hoplon.reveal.quicklist = (function hoplon$reveal$quicklist(var_args){
var args__8311__auto__ = [];
var len__8304__auto___14972 = arguments.length;
var i__8305__auto___14973 = (0);
while(true){
if((i__8305__auto___14973 < len__8304__auto___14972)){
args__8311__auto__.push((arguments[i__8305__auto___14973]));

var G__14974 = (i__8305__auto___14973 + (1));
i__8305__auto___14973 = G__14974;
continue;
} else {
}
break;
}

var argseq__8312__auto__ = ((((0) < args__8311__auto__.length))?(new cljs.core.IndexedSeq(args__8311__auto__.slice((0)),(0),null)):null);
return hoplon.reveal.quicklist.cljs$core$IFn$_invoke$arity$variadic(argseq__8312__auto__);
});

hoplon.reveal.quicklist.cljs$core$IFn$_invoke$arity$variadic = (function (things){
var G__14967 = hoplon.core.loop_tpl_STAR_(things,(function (item__14280__auto__){
var vec__14968 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
})).call(null,item__14280__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(0),null);
var G__14971 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$1(G__14971) : hoplon.core.li.call(null,G__14971));
}));
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__14967) : hoplon.core.ul.call(null,G__14967));
});

hoplon.reveal.quicklist.cljs$lang$maxFixedArity = (0);

hoplon.reveal.quicklist.cljs$lang$applyTo = (function (seq14966){
return hoplon.reveal.quicklist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14966));
});

/**
 * @param {...*} var_args
 */
hoplon.reveal.notes = (function() { 
var hoplon$reveal$notes__delegate = function (args__14260__auto__){
var vec__14980 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980,(1),null);
var G__14983 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"notes"], null)], 0));
var G__14984 = children;
return (hoplon.core.aside.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.aside.cljs$core$IFn$_invoke$arity$2(G__14983,G__14984) : hoplon.core.aside.call(null,G__14983,G__14984));
};
var hoplon$reveal$notes = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14985__i = 0, G__14985__a = new Array(arguments.length -  0);
while (G__14985__i < G__14985__a.length) {G__14985__a[G__14985__i] = arguments[G__14985__i + 0]; ++G__14985__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14985__a,0);
} 
return hoplon$reveal$notes__delegate.call(this,args__14260__auto__);};
hoplon$reveal$notes.cljs$lang$maxFixedArity = 0;
hoplon$reveal$notes.cljs$lang$applyTo = (function (arglist__14986){
var args__14260__auto__ = cljs.core.seq(arglist__14986);
return hoplon$reveal$notes__delegate(args__14260__auto__);
});
hoplon$reveal$notes.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$notes__delegate;
return hoplon$reveal$notes;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.reveal.highlight = (function() { 
var hoplon$reveal$highlight__delegate = function (args__14260__auto__){
var vec__14991 = hoplon.core.parse_args(args__14260__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991,(1),null);
var G__14994 = (hoplon.core.code.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$2(attrs,children) : hoplon.core.code.call(null,attrs,children));
return (hoplon.core.pre.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.pre.cljs$core$IFn$_invoke$arity$1(G__14994) : hoplon.core.pre.call(null,G__14994));
};
var hoplon$reveal$highlight = function (var_args){
var args__14260__auto__ = null;
if (arguments.length > 0) {
var G__14995__i = 0, G__14995__a = new Array(arguments.length -  0);
while (G__14995__i < G__14995__a.length) {G__14995__a[G__14995__i] = arguments[G__14995__i + 0]; ++G__14995__i;}
  args__14260__auto__ = new cljs.core.IndexedSeq(G__14995__a,0);
} 
return hoplon$reveal$highlight__delegate.call(this,args__14260__auto__);};
hoplon$reveal$highlight.cljs$lang$maxFixedArity = 0;
hoplon$reveal$highlight.cljs$lang$applyTo = (function (arglist__14996){
var args__14260__auto__ = cljs.core.seq(arglist__14996);
return hoplon$reveal$highlight__delegate(args__14260__auto__);
});
hoplon$reveal$highlight.cljs$core$IFn$_invoke$arity$variadic = hoplon$reveal$highlight__delegate;
return hoplon$reveal$highlight;
})()
;
