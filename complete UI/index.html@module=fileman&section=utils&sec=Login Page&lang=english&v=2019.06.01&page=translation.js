var t = [];
if (FR.trans) {FR.trans = Ext.apply(FR.trans, t);} else {FR.trans = t;}
FR.T = function(k, s) {if (FR.trans[k]) {return FR.trans[k];} else {return k;}}

