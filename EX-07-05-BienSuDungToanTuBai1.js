tinVatLy = prompt ("Enter the VatLy");
tinHoa= prompt ("Enter the Hoa");
tinSinhHoc= prompt ("Enter the SinhHoc");

let vatly = parseInt(tinVatLy);
let hoa = parseInt(tinHoa);
let sinhhoc = parseInt(tinSinhHoc);

let diemtrungbinh = (vatly + hoa + sinhhoc)/3 ;
    document.write("Diem TrungBinh la: " + diemtrungbinh )