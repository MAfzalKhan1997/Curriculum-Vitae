var myCV = new mydetails("Muhammad Afzal Khan","Computer Engineer<br>Web Developer & UI/UX Expert","mafzalkhan1997@gmail.com",
"+92-3442879958","Shah Faisal Colony,Karachi","OBJECTIVE","To get suitable position in reputable organization in accordance with the Qualification and Experience back ground seeking a challenging career.I will leave no stone unturned to satisfy my superior with my work and manner.",
"EDUCATION","GRADUATION","2017-2020<br>BS in Computer Engineering from SSUET","INTERMEDIATE","2014-2016<br>Govt Deg Gulshan College","MATRICULATION","2012-2014<br>The Educators School",
"SKILLS","HTML5","CSS3","JAVASCRIPT","BOOTSTRAP","C","JAVA","ADOBE CC","AUTOCAD","MS-OFFICE 365","CONTACT")

function mydetails(name,det,gmail,phone,adrs,headobj,objective,headedu,matric,school,inter,college,grad,uni,
headskills,html,css,jscript,boot,c,java,adobe,autocad,office,contact)
{
this.name=name;
this.det=det;
this.gmail=gmail;
this.phone=phone;
this.adrs=adrs;
this.headobj=headobj;
this.objective=objective;
this.headedu=headedu;
this.matric=matric;
this.school=school;
this.inter=inter;
this.college=college;
this.grad=grad;
this.uni=uni;
this.headskills=headskills;
this.html=html;
this.css=css;
this.jscript=jscript;
this.boot=boot;
this.c=c;
this.java=java;
this.abode=adobe;
this.autocad=autocad;
this.office=office;
this.contact=contact;

document.getElementById("name").innerHTML=name;
document.getElementById("det").innerHTML=det;
document.getElementById("gmail").innerHTML=gmail;
document.getElementById("phone").innerHTML=phone;
document.getElementById("adrs").innerHTML=adrs;

document.getElementById("objective").childNodes[2].innerHTML=headobj;
document.getElementById("objective").childNodes[4].innerHTML=objective;

document.getElementById("education").childNodes[2].innerHTML=headedu;
document.getElementById("levels").childNodes[1].innerHTML=matric;
document.getElementById("levels").childNodes[3].innerHTML=school;
document.getElementById("levels").childNodes[5].innerHTML=inter;
document.getElementById("levels").childNodes[7].innerHTML=college;
document.getElementById("levels").childNodes[9].innerHTML=grad;
document.getElementById("levels").childNodes[11].innerHTML=uni;

document.getElementById("skills").childNodes[2].innerHTML=headskills;
document.getElementById("hhtml").innerHTML=html;
document.getElementById("css").innerHTML=css;
document.getElementById("jscript").innerHTML=jscript;
document.getElementById("boot").innerHTML=boot;
document.getElementById("c").innerHTML=c;
document.getElementById("java").innerHTML=java;
document.getElementById("adobe").innerHTML=adobe;
document.getElementById("autocad").innerHTML=autocad;
document.getElementById("office").innerHTML=office;

document.getElementById("CONTACT").childNodes[2].innerHTML=contact;
}


function blueclr(){

    document.getElementById("cntnr").style.backgroundColor= "#1c4f87";
    document.getElementById("e1").style.backgroundColor= "#1c4f87";
    document.getElementById("e2").style.backgroundColor= "#1c4f87";
    document.getElementById("e3").style.backgroundColor= "#1c4f87";
    document.getElementById("skills").style.color= "#1c4f87";
    document.getElementById("percent").style.backgroundColor= "#1c4f87";
    document.getElementById("CONTACT").style.color= "#1c4f87";
    document.getElementById("map").style.backgroundColor= "#1c4f87";
    document.getElementById("cpyrt").style.backgroundColor= "#1c4f87";

    document.getElementById("objective").style.color= "#13385f";
    document.getElementById("objctv").style.color= "#13385f";
    document.getElementById("education").style.color= "#13385f";
    document.getElementById("p1").style.color= "#13385f";
    document.getElementById("p1").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p2").style.color= "#13385f";
    document.getElementById("p2").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("p3").style.color= "#13385f";
    document.getElementById("p3").style.borderLeftColor= "rgb(0, 179, 104)";
    document.getElementById("s1").style.backgroundColor= "#13385f";
    document.getElementById("s2").style.backgroundColor= "#13385f";
    document.getElementById("s3").style.backgroundColor= "#13385f";
    document.getElementById("s4").style.backgroundColor= "#13385f";
    document.getElementById("s5").style.backgroundColor= "#13385f";
    document.getElementById("s6").style.backgroundColor= "#13385f";    
    document.getElementById("s7").style.backgroundColor= "#13385f";
    document.getElementById("s8").style.backgroundColor= "#13385f";
    document.getElementById("s9").style.backgroundColor= "#13385f";

}