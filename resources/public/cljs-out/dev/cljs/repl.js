// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25602){
var map__25603 = p__25602;
var map__25603__$1 = ((((!((map__25603 == null)))?(((((map__25603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25603):map__25603);
var m = map__25603__$1;
var n = cljs.core.get.call(null,map__25603__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25605_25627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25606_25628 = null;
var count__25607_25629 = (0);
var i__25608_25630 = (0);
while(true){
if((i__25608_25630 < count__25607_25629)){
var f_25631 = cljs.core._nth.call(null,chunk__25606_25628,i__25608_25630);
cljs.core.println.call(null,"  ",f_25631);


var G__25632 = seq__25605_25627;
var G__25633 = chunk__25606_25628;
var G__25634 = count__25607_25629;
var G__25635 = (i__25608_25630 + (1));
seq__25605_25627 = G__25632;
chunk__25606_25628 = G__25633;
count__25607_25629 = G__25634;
i__25608_25630 = G__25635;
continue;
} else {
var temp__5457__auto___25636 = cljs.core.seq.call(null,seq__25605_25627);
if(temp__5457__auto___25636){
var seq__25605_25637__$1 = temp__5457__auto___25636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25605_25637__$1)){
var c__4351__auto___25638 = cljs.core.chunk_first.call(null,seq__25605_25637__$1);
var G__25639 = cljs.core.chunk_rest.call(null,seq__25605_25637__$1);
var G__25640 = c__4351__auto___25638;
var G__25641 = cljs.core.count.call(null,c__4351__auto___25638);
var G__25642 = (0);
seq__25605_25627 = G__25639;
chunk__25606_25628 = G__25640;
count__25607_25629 = G__25641;
i__25608_25630 = G__25642;
continue;
} else {
var f_25643 = cljs.core.first.call(null,seq__25605_25637__$1);
cljs.core.println.call(null,"  ",f_25643);


var G__25644 = cljs.core.next.call(null,seq__25605_25637__$1);
var G__25645 = null;
var G__25646 = (0);
var G__25647 = (0);
seq__25605_25627 = G__25644;
chunk__25606_25628 = G__25645;
count__25607_25629 = G__25646;
i__25608_25630 = G__25647;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25648 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25648);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25648)))?cljs.core.second.call(null,arglists_25648):arglists_25648));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25609_25649 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25610_25650 = null;
var count__25611_25651 = (0);
var i__25612_25652 = (0);
while(true){
if((i__25612_25652 < count__25611_25651)){
var vec__25613_25653 = cljs.core._nth.call(null,chunk__25610_25650,i__25612_25652);
var name_25654 = cljs.core.nth.call(null,vec__25613_25653,(0),null);
var map__25616_25655 = cljs.core.nth.call(null,vec__25613_25653,(1),null);
var map__25616_25656__$1 = ((((!((map__25616_25655 == null)))?(((((map__25616_25655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25616_25655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25616_25655):map__25616_25655);
var doc_25657 = cljs.core.get.call(null,map__25616_25656__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25658 = cljs.core.get.call(null,map__25616_25656__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25654);

cljs.core.println.call(null," ",arglists_25658);

if(cljs.core.truth_(doc_25657)){
cljs.core.println.call(null," ",doc_25657);
} else {
}


var G__25659 = seq__25609_25649;
var G__25660 = chunk__25610_25650;
var G__25661 = count__25611_25651;
var G__25662 = (i__25612_25652 + (1));
seq__25609_25649 = G__25659;
chunk__25610_25650 = G__25660;
count__25611_25651 = G__25661;
i__25612_25652 = G__25662;
continue;
} else {
var temp__5457__auto___25663 = cljs.core.seq.call(null,seq__25609_25649);
if(temp__5457__auto___25663){
var seq__25609_25664__$1 = temp__5457__auto___25663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25609_25664__$1)){
var c__4351__auto___25665 = cljs.core.chunk_first.call(null,seq__25609_25664__$1);
var G__25666 = cljs.core.chunk_rest.call(null,seq__25609_25664__$1);
var G__25667 = c__4351__auto___25665;
var G__25668 = cljs.core.count.call(null,c__4351__auto___25665);
var G__25669 = (0);
seq__25609_25649 = G__25666;
chunk__25610_25650 = G__25667;
count__25611_25651 = G__25668;
i__25612_25652 = G__25669;
continue;
} else {
var vec__25618_25670 = cljs.core.first.call(null,seq__25609_25664__$1);
var name_25671 = cljs.core.nth.call(null,vec__25618_25670,(0),null);
var map__25621_25672 = cljs.core.nth.call(null,vec__25618_25670,(1),null);
var map__25621_25673__$1 = ((((!((map__25621_25672 == null)))?(((((map__25621_25672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25621_25672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25621_25672):map__25621_25672);
var doc_25674 = cljs.core.get.call(null,map__25621_25673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25675 = cljs.core.get.call(null,map__25621_25673__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25671);

cljs.core.println.call(null," ",arglists_25675);

if(cljs.core.truth_(doc_25674)){
cljs.core.println.call(null," ",doc_25674);
} else {
}


var G__25676 = cljs.core.next.call(null,seq__25609_25664__$1);
var G__25677 = null;
var G__25678 = (0);
var G__25679 = (0);
seq__25609_25649 = G__25676;
chunk__25610_25650 = G__25677;
count__25611_25651 = G__25678;
i__25612_25652 = G__25679;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__25623 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25624 = null;
var count__25625 = (0);
var i__25626 = (0);
while(true){
if((i__25626 < count__25625)){
var role = cljs.core._nth.call(null,chunk__25624,i__25626);
var temp__5457__auto___25680__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25680__$1)){
var spec_25681 = temp__5457__auto___25680__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25681));
} else {
}


var G__25682 = seq__25623;
var G__25683 = chunk__25624;
var G__25684 = count__25625;
var G__25685 = (i__25626 + (1));
seq__25623 = G__25682;
chunk__25624 = G__25683;
count__25625 = G__25684;
i__25626 = G__25685;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__25623);
if(temp__5457__auto____$1){
var seq__25623__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25623__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25623__$1);
var G__25686 = cljs.core.chunk_rest.call(null,seq__25623__$1);
var G__25687 = c__4351__auto__;
var G__25688 = cljs.core.count.call(null,c__4351__auto__);
var G__25689 = (0);
seq__25623 = G__25686;
chunk__25624 = G__25687;
count__25625 = G__25688;
i__25626 = G__25689;
continue;
} else {
var role = cljs.core.first.call(null,seq__25623__$1);
var temp__5457__auto___25690__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25690__$2)){
var spec_25691 = temp__5457__auto___25690__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25691));
} else {
}


var G__25692 = cljs.core.next.call(null,seq__25623__$1);
var G__25693 = null;
var G__25694 = (0);
var G__25695 = (0);
seq__25623 = G__25692;
chunk__25624 = G__25693;
count__25625 = G__25694;
i__25626 = G__25695;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
