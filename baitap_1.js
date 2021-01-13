// Tạo mảng để lưu giá trị do người dùng nhập vào.
var numList = [];
document.getElementById("btnThemSo").addEventListener("click", function () {
  //Tạo biến lấy giá trị do người dùng nhập vào và ép về kiểu số nguyên
  var number = parseInt(document.getElementById("txtNumber").value);
  //Thêm số vào trong mảng
  numList.push(number);
  //In kết quả ra ngoài màn hình chính
  document.getElementById("CF").innerHTML = "Mảng: " + numList;
  // console.log(numList);
});

// Tính tổng các số dương trong mảng
document
  .getElementById("btnTongSoDuong")
  .addEventListener("click", function () {
    // Tạo biến tích lũy tổng các số dương
    var tongSoDuong = parseInt(0);
    // Sử dụng vòng lặp for để cộng dồn
    for (i = 0; i < numList.length; i++) {
      if (numList[i] > 0) {
        tongSoDuong += numList[i];
      }
    }
    //In kết quả ra ngoài màn hình chính
    document.getElementById("CF").innerHTML =
      "Tổng các số dương trong mảng là: " + tongSoDuong;
  });

// Đếm số số dương trong mảng
document.getElementById("btnSoDuong").addEventListener("click", function () {
  //Tạo biến đếm các số dương và ép kiểu về số nguyên
  var soDuong = parseInt(0);
  //Sử dụng vòng lặp for để xét điều kiện lớn hơn 0
  for (i = 0; i < numList.length; i++) {
    if (numList[i] > 0) {
      soDuong++;
    }
  }

  //In kết quả ra ngoài màn hình chính
  document.getElementById("CF").innerHTML =
    "Có " + soDuong + " số dương trong mảng";
  // console.log(soDuong);
});

//Tìm số nhỏ nhất trong mảng
document.getElementById("btnSoNhoNhat").addEventListener("click", function () {
  //Gán phần tử đầu tiên trong mảng là số nhỏ nhất
  var soNhoNhat = numList[0];
  //Sư dụng vòng lặp for để xét điều kiện
  // Nếu các phần tử tiếp theo nhỏ hơn phần tử đầu tiên, gán lại phần tử đó thành số nhỏ nhất
  for (i = 1; i < numList.length; i++) {
    if (numList[i] < soNhoNhat) {
      soNhoNhat = numList[i];
    }
  }
  //In kết quả ra ngoài màn hình chính
  document.getElementById("CF").innerHTML =
    "Số nhỏ nhất trong mảng là: " + soNhoNhat;
  // console.log(soNhoNhat);
});

//Tìm số dương nhỏ nhất trong mảng
document
  .getElementById("btnSoDuongNhoNhat")
  .addEventListener("click", function () {
    //Gán 1 là số dương nhỏ nhất trong mảng
    var soDuongNhoNhat = parseInt(1);
    //Sư dụng vòng lặp for để xét điều kiện
    // Nếu các phần tử tiếp theo đồng thời lớn hơn 1 và nhỏ hơn phần tử đầu tiên, gán lại phần tử đó thành số nhỏ nhất
    for (i = 1; i < numList.length; i++) {
      if (numList[i] > 0 && numList[i] < soDuongNhoNhat) {
        soDuongNhoNhat = numList[i];
      }
    }
    //In kết quả ra ngoài màn hình chính
    document.getElementById("CF").innerHTML =
      "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat;
    // console.log(soNhoNhat);
  });

//Tìm số chẵn cuối cùng
document
  .getElementById("btnSoChanCuoiCung")
  .addEventListener("click", function () {
    // Tạo một mảng soChan riêng chỉ để lưu trữ các số chẵn
    // Sử dụng vòng lặp for, xét điều kiện số chẵn và thêm vào mảng soChan
    var soChan = [];
    for (i = 0; i < numList.length; i++) {
      if (numList[i] % 2 == 0) {
        soChan.push(numList[i]);
      }
    }

    //In kết quả ra ngoài màn hình chính
    if (soChan.length == 0) {
      // Nếu mảng soChan rỗng, tức là mảng ban đầu numList không có số chẵn
      // Kết quả in ra -1
      document.getElementById("CF").innerHTML = "-1";
    } else {
      //Trường hợp mảng soChan có phần tử thì in ra số cuối cùng
      document.getElementById("CF").innerHTML =
        "Số chẵn cuối cùng trong mảng là: " + soChan.slice(-1)[0];
    }
  });

// Đổi hai giá trị trong mảng theo vị trí
document.getElementById("btnDoiCho").addEventListener("click", function () {
  // Tạo biến và gán kết quả do người dùng nhập vào
  // Trừ đi 1 ở đây là để chuyển từ index thực tế với index trong JS
  var viTri1 = parseInt(document.getElementById("vitri1").value - 1);
  var viTri2 = parseInt(document.getElementById("vitri2").value - 1);
  // Tạo biến tạm để lưu giá trị cũ của 2 phần tử được đổi chỗ
  // Sau đó gán lại cho hai phần tử trên
  var soViTri1Cu = numList[viTri1];
  var soViTri2Cu = numList[viTri2];
  numList[viTri2] = soViTri1Cu;
  numList[viTri1] = soViTri2Cu;

  //In kết quả ra ngoài màn hình chính
  document.getElementById("CF").innerHTML =
    "Mảng sau khi đã đổi vị trí: " + numList;
  // console.log(numList);
});

//Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btnSapXepMang").addEventListener("click", function () {
  // Sử dụng thuật toán sort cho số
  numList.sort(function (a, b) {
    return a - b;
  });

  //In kết quả ra ngoài màn hình chính
  document.getElementById("CF").innerHTML =
    "Mảng sau xếp theo thứ tự tăng dần: " + numList;
  // console.log(numList);
});
