function cal()
{
var i,b,t,d,e,f,s;
i=Number(document.getElementById("ab").value);
f=Number(document.getElementById("abc").value);
t=Number(document.getElementById("abcd").value);
d=Math.log(i);
e=Math.log(t);
b=(0.000086173*t)*((1.5*e)-d);
s=5.036*b;
document.getElementById("as").value=b;
document.getElementById("asd").value=s;
}
