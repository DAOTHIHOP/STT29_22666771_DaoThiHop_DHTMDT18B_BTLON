// Hàm kiểm tra tên hợp lệ (viết hoa chữ cái đầu tiên, không dấu)
function validateName() {
    const name = document.getElementById('name');
    // Biểu thức chính quy: Chữ đầu tiên viết hoa, không dấu, và các ký tự tiếp theo là chữ thường
    const nameRegex =  /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    if (!nameRegex.test(name.value.trim())) {
        document.getElementById('nameError').textContent = "Họ và tên phải bắt đầu bằng chữ hoa và không dấu (Ví dụ: Nguyen Van A)";
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        document.getElementById('nameError').textContent = "";
    }
}

// Hàm kiểm tra email hợp lệ
function validateEmail() {
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@gmail\.com$/;

    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').textContent = "Email phải đúng định dạng và phải có @gmail.com";
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        document.getElementById('emailError').textContent = "";
    }
}

// Hàm kiểm tra số điện thoại hợp lệ
function validatePhone() {
    const phone = document.getElementById('phone');
    const phoneRegex = /^0\d{9}$/;

    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById('phoneError').textContent = "Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0";
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        document.getElementById('phoneError').textContent = "";
    }
}

// Hàm kiểm tra phản hồi không để trống
function validateFeedback() {
    const feedback = document.getElementById('feedback');

    if (feedback.value.trim() === "") {
        document.getElementById('feedbackError').textContent = "Phản hồi không được để trống";
        feedback.classList.add('is-invalid');
        feedback.classList.remove('is-valid');
    } else {
        feedback.classList.remove('is-invalid');
        feedback.classList.add('is-valid');
        document.getElementById('feedbackError').textContent = "";
    }
}

// Hàm kiểm tra tất cả các trường và hiển thị thông báo nếu có ô nào bỏ trống
function checkEmptyFields(currentInput) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const feedback = document.getElementById('feedback');

    if (currentInput === email && name.value.trim() === "") {
        name.classList.add('is-invalid');
        document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
    }

    if (currentInput === phone) {
        if (name.value.trim() === "") {
            name.classList.add('is-invalid');
            document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
        }
        if (email.value.trim() === "") {
            email.classList.add('is-invalid');
            document.getElementById('emailError').textContent = "Email không được để trống.";
        }
    }

    if (currentInput === feedback) {
        if (name.value.trim() === "") {
            name.classList.add('is-invalid');
            document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
        }
        if (email.value.trim() === "") {
            email.classList.add('is-invalid');
            document.getElementById('emailError').textContent = "Email không được để trống.";
        }
        if (phone.value.trim() === "") {
            phone.classList.add('is-invalid');
            document.getElementById('phoneError').textContent = "Số điện thoại không được để trống.";
        }
    }
}

// Gọi các hàm kiểm tra trong thời gian thực khi người dùng nhập
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('feedback').addEventListener('input', validateFeedback);

// Thêm sự kiện focus để kiểm tra trống ngay khi người dùng vào ô mới
document.getElementById('email').addEventListener('focus', function() {
    const name = document.getElementById('name');
    if (name.value.trim() === "") {
        name.classList.add('is-invalid');
        document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
        name.focus(); // Đặt lại tiêu điểm vào ô tên
    }
});

document.getElementById('phone').addEventListener('focus', function() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (name.value.trim() === "") {
        name.classList.add('is-invalid');
        document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
        name.focus(); // Đặt lại tiêu điểm vào ô tên
        return;
    }
    if (email.value.trim() === "") {
        email.classList.add('is-invalid');
        document.getElementById('emailError').textContent = "Email không được để trống.";
        email.focus(); // Đặt lại tiêu điểm vào ô email
    }
});

document.getElementById('feedback').addEventListener('focus', function() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if (name.value.trim() === "") {
        name.classList.add('is-invalid');
        document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
        name.focus(); // Đặt lại tiêu điểm vào ô tên
        return;
    }
    if (email.value.trim() === "") {
        email.classList.add('is-invalid');
        document.getElementById('emailError').textContent = "Email không được để trống.";
        email.focus(); // Đặt lại tiêu điểm vào ô email
        return;
    }
    if (phone.value.trim() === "") {
        phone.classList.add('is-invalid');
        document.getElementById('phoneError').textContent = "Số điện thoại không được để trống.";
        phone.focus(); // Đặt lại tiêu điểm vào ô số điện thoại
    }
});

// Khi form được submit
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi form nếu có lỗi

    // Kiểm tra lại tất cả các trường
    validateName();
    validateEmail();
    validatePhone();
    validateFeedback();

    // Nếu tất cả các trường hợp đều hợp lệ
    const isFormValid = document.querySelectorAll('.is-invalid').length === 0;

    if (isFormValid) {
        alert("Phản hồi của bạn đã được gửi thành công!");
        window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
    }
});