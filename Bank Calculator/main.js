function Hesabla(){
    var mebleg = Number(document.getElementById('mebleg').value) ;
    var faiz = Number(document.getElementById('faiz').value) ;
    var ay = Number(document.getElementById('ay').value);
    var umumi = (mebleg+ ((mebleg*faiz)/100));
    var ayliq = umumi / ay;
    document.getElementById('umumi').innerHTML = umumi;
    document.getElementById('ayliq').innerHTML = ayliq;
}