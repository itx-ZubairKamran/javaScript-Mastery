// JavaScript auto-converts types in some operations
"5" + 1 // "51" → number converted to string  (imp)
"5" - 1 // 4 → string converted to number     (imp)
true + 1 // 2  as true value is one so iyt become 1+1=2
null + 1 // 1  null value is 0
undefined + 1 // NaN

// == compares value with type conversion 
// === compares value + type (no conversion)
5 == "5"  // same as value is 5 which is same 
5 === "5" // not same as 5 is number and second 5 is string
// Always prefer === for accurate comparisons

// Falsy values => which show that is false always when you see one of them 
// false , 0 , "" , null , undefined , NaN

// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

// undefined means the variable was never assigned.
// null means you intentionally set it to "nothing".
