// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19618__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19619__i = 0, G__19619__a = new Array(arguments.length -  0);
while (G__19619__i < G__19619__a.length) {G__19619__a[G__19619__i] = arguments[G__19619__i + 0]; ++G__19619__i;}
  args = new cljs.core.IndexedSeq(G__19619__a,0,null);
} 
return G__19618__delegate.call(this,args);};
G__19618.cljs$lang$maxFixedArity = 0;
G__19618.cljs$lang$applyTo = (function (arglist__19620){
var args = cljs.core.seq(arglist__19620);
return G__19618__delegate(args);
});
G__19618.cljs$core$IFn$_invoke$arity$variadic = G__19618__delegate;
return G__19618;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19621__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19622__i = 0, G__19622__a = new Array(arguments.length -  0);
while (G__19622__i < G__19622__a.length) {G__19622__a[G__19622__i] = arguments[G__19622__i + 0]; ++G__19622__i;}
  args = new cljs.core.IndexedSeq(G__19622__a,0,null);
} 
return G__19621__delegate.call(this,args);};
G__19621.cljs$lang$maxFixedArity = 0;
G__19621.cljs$lang$applyTo = (function (arglist__19623){
var args = cljs.core.seq(arglist__19623);
return G__19621__delegate(args);
});
G__19621.cljs$core$IFn$_invoke$arity$variadic = G__19621__delegate;
return G__19621;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
