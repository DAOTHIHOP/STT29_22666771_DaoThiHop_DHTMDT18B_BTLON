// FORM ĐĂNG KÝ
// Kiểm tra tên hợp lệ (chữ cái đầu viết hoa và không có dấu)
function isValidName(name) {
    const regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; // Chỉ cho phép chữ hoa đầu và không có dấu
    return regex.test(name);
}

// Kiểm tra email hợp lệ
function isValidEmail(email) {
    const regex = /^[^\s@]+@gmail\.com$/;
    return regex.test(email);
}

// Kiểm tra số điện thoại hợp lệ (10 số và bắt đầu bằng số 0)
function isValidPhone(phone) {
    const regex = /^0[0-9]{9}$/;
    return regex.test(phone);
}

// Kiểm tra mật khẩu hợp lệ (có ít nhất 6 ký tự và có cả chữ và số)
function isValidPassword(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
}

// Đổi màu viền khi hợp lệ hoặc không hợp lệ
function setInputValidity(inputElement, isValid, errorElement) {
    if (isValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid'); // Đổi màu viền xanh
        errorElement.style.display = "none"; // Ẩn thông báo lỗi
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid'); // Đổi màu viền đỏ
        errorElement.style.display = "inline"; // Hiện thông báo lỗi
    }
}

// Xử lý sự kiện nhập liệu cho trường Name
document.getElementById('nameInput').addEventListener('input', function() {
    const name = this.value.trim();
    const nameError = document.getElementById('nameError');
    const isValid = isValidName(name);
    setInputValidity(this, isValid, nameError);
});

// Xử lý sự kiện nhập liệu cho trường Email/Phone
document.getElementById('emailPhoneInput').addEventListener('input', function() {
    const input = this.value.trim();
    const emailPhoneError = document.getElementById('emailPhoneError');
    const isValid = isValidEmail(input) || isValidPhone(input);
    setInputValidity(this, isValid, emailPhoneError);
});

// Xử lý sự kiện nhập liệu cho trường Password
document.getElementById('loginPassword').addEventListener('input', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('loginPasswordError');
    const isValid = isValidPassword(password);
    setInputValidity(this, isValid, passwordError);
});

// Xử lý sự kiện nhập liệu cho trường Confirm Password
document.getElementById('confirmLoginPassword').addEventListener('input', function() {
    const password = document.getElementById('loginPassword').value.trim();
    const confirmPassword = this.value.trim();
    const passwordError = document.getElementById('passwordError');
    const isValid = (password === confirmPassword);
    setInputValidity(this, isValid, passwordError);
});

// Kiểm tra toàn bộ form trước khi gửi đi
function validateForm() {
    const name = document.getElementById('nameInput').value.trim();
    const emailPhone = document.getElementById('emailPhoneInput').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const confirmPassword = document.getElementById('confirmLoginPassword').value.trim();

    let isFormValid = true;

    // Kiểm tra tên
    if (!isValidName(name)) {
        setInputValidity(document.getElementById('nameInput'), false, document.getElementById('nameError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('nameInput'), true, document.getElementById('nameError'));
    }

    // Kiểm tra email hoặc số điện thoại
    if (!isValidEmail(emailPhone) && !isValidPhone(emailPhone)) {
        setInputValidity(document.getElementById('emailPhoneInput'), false, document.getElementById('emailPhoneError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('emailPhoneInput'), true, document.getElementById('emailPhoneError'));
    }

    // Kiểm tra mật khẩu
    if (!isValidPassword(password)) {
        setInputValidity(document.getElementById('loginPassword'), false, document.getElementById('loginPasswordError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('loginPassword'), true, document.getElementById('loginPasswordError'));
    }

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        setInputValidity(document.getElementById('confirmLoginPassword'), false, document.getElementById('passwordError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('confirmLoginPassword'), true, document.getElementById('passwordError'));
    }

    // Nếu form hợp lệ, hiển thị thông báo và chuyển hướng
    if (isFormValid) {
        alert("Đăng ký thành công!");
        window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
    }
}



// FORM ĐĂNG NHẬP
// Kiểm tra email hợp lệ
function isValidEmail(email) {
    const regex = /^[^\s@]+@gmail\.com$/;
    return regex.test(email);
}

// Kiểm tra số điện thoại hợp lệ (10 số và bắt đầu bằng số 0)
function isValidPhone(phone) {
    const regex = /^0[0-9]{9}$/;
    return regex.test(phone);
}

// Kiểm tra mật khẩu
function validatePassword() {
    const password = document.getElementById('Password');
    const passwordError = document.getElementById('passwordError');

    // Kiểm tra nếu trường mật khẩu trống
    if (password.value.trim() === "") {
        password.classList.add('is-invalid');
        passwordError.textContent = "Mật khẩu không được để trống.";
        return false;
    } else {
        password.classList.remove('is-invalid');
        passwordError.textContent = "";
        return true;
    }
}

// Đổi màu viền và hiện/ẩn thông báo lỗi khi hợp lệ hoặc không hợp lệ
function setInputValidity(inputElement, isValid, errorElement) {
    if (isValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid'); // Đổi màu viền xanh
        errorElement.style.display = "none"; // Ẩn thông báo lỗi
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid'); // Đổi màu viền đỏ
        errorElement.style.display = "inline"; // Hiện thông báo lỗi
    }
}

// Xử lý sự kiện nhập liệu cho trường Email/Phone đăng nhập
document.getElementById('loginEmailPhone').addEventListener('input', function() {
    const input = this.value.trim();
    const loginEmailPhoneError = document.getElementById('loginEmailPhoneError');
    const isValid = isValidEmail(input) || isValidPhone(input);
    setInputValidity(this, isValid, loginEmailPhoneError);
});

// Xử lý sự kiện nhập liệu cho trường Password đăng nhập
document.getElementById('Password').addEventListener('input', function() {
    validatePassword(); // Gọi hàm kiểm tra mật khẩu để cập nhật thông báo lỗi
});

// Kiểm tra toàn bộ form đăng nhập
function validateLoginForm() {
    const emailPhone = document.getElementById('loginEmailPhone').value.trim();
    const password = document.getElementById('Password').value.trim();

    let isFormValid = true;

    // Kiểm tra email hoặc số điện thoại
    if (!isValidEmail(emailPhone) && !isValidPhone(emailPhone)) {
        setInputValidity(document.getElementById('loginEmailPhone'), false, document.getElementById('loginEmailPhoneError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('loginEmailPhone'), true, document.getElementById('loginEmailPhoneError'));
    }

    // Kiểm tra mật khẩu
    if (!validatePassword()) {
        setInputValidity(document.getElementById('Password'), false, document.getElementById('passwordError'));
        isFormValid = false;
    } else {
        setInputValidity(document.getElementById('Password'), true, document.getElementById('passwordError'));
    }

    // Kiểm tra xem người dùng có tick ô "Ghi nhớ tài khoản" hay không
    const rememberMe = document.getElementById('rememberMe').checked;

    if (isFormValid) {
        if (!rememberMe) {
            const confirmRemember = confirm("Bạn có muốn ghi nhớ tài khoản cho lần đăng nhập tiếp theo không?");
            if (confirmRemember) {
                alert("Đăng nhập thành công!"); // Hiển thị thông báo
                window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
            } else {
                alert("Bạn đã chọn không ghi nhớ tài khoản cho lần đăng nhập tiếp theo.");
                window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
            }
        } else {
            alert("Đăng nhập thành công!"); // Hiển thị thông báo
            window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin trước khi đăng nhập!"); // Thông báo khi thiếu thông tin
    }
}
