
 function WriteToFile(passForm) {

    set fso = CreateObject("Scripting.FileSystemObject");  
    set s = fso.CreateTextFile("C:\test.txt", True);
    s.writeline(document.passForm.input1.value);
    s.writeline(document.passForm.input2.value);
    s.writeline(document.passForm.input3.value);
    s.Close();
 }
