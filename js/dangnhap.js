// Kiểm tra tên hợp lệ (ít nhất 2 từ, chữ cái đầu viết hoa và không có dấu)
function isValidName(name) {
    const regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/; // Tối thiểu 2 từ và chữ hoa đầu
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

// Kiểm tra mật khẩu hợp lệ (ít nhất 6 ký tự, bao gồm cả chữ và số)
function isValidPassword(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
}

// Hiển thị hoặc ẩn lỗi
function setError(element, message) {
    const errorElement = element.nextElementSibling; // Phần tử hiển thị lỗi
    if (message) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    } else {
        errorElement.textContent = "";
        errorElement.style.display = "none";
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
}

// Xử lý sự kiện blur cho các trường form đăng ký
document.getElementById("nameInput").addEventListener("blur", function () {
    const name = this.value.trim();
    if (!name) {
        setError(this, "Vui lòng không bỏ trống!");
    } else if (!isValidName(name)) {
        setError(this, "Họ tên phải gồm ít nhất 2 từ, viết hoa chữ cái đầu và không có dấu.");
    } else {
        setError(this, "");
    }
});

document.getElementById("emailPhoneInput").addEventListener("blur", function () {
    const input = this.value.trim();
    if (!input) {
        setError(this, "Vui lòng không bỏ trống!");
    } else if (!isValidEmail(input) && !isValidPhone(input)) {
        setError(this, "Email phải là @gmail.com hoặc số điện thoại phải bắt đầu bằng 0 và đủ 10 số.");
    } else {
        setError(this, "");
    }
});

document.getElementById("loginPassword").addEventListener("blur", function () {
    const password = this.value.trim();
    if (!password) {
        setError(this, "Mật khẩu không được để trống!");
    } else if (!isValidPassword(password)) {
        setError(this, "Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số.");
    } else {
        setError(this, "");
    }
});

document.getElementById("confirmLoginPassword").addEventListener("blur", function () {
    const password = document.getElementById("loginPassword").value.trim();
    const confirmPassword = this.value.trim();
    if (!confirmPassword) {
        setError(this, "Vui lòng xác nhận mật khẩu!");
    } else if (password !== confirmPassword) {
        setError(this, "Mật khẩu xác nhận không khớp!");
    } else {
        setError(this, "");
    }
});

// Kiểm tra toàn bộ form đăng ký trước khi gửi
function validateForm() {
    const nameInput = document.getElementById("nameInput");
    const emailPhoneInput = document.getElementById("emailPhoneInput");
    const passwordInput = document.getElementById("loginPassword");
    const confirmPasswordInput = document.getElementById("confirmLoginPassword");

    nameInput.dispatchEvent(new Event("blur"));
    emailPhoneInput.dispatchEvent(new Event("blur"));
    passwordInput.dispatchEvent(new Event("blur"));
    confirmPasswordInput.dispatchEvent(new Event("blur"));

    const invalidElements = document.querySelectorAll(".is-invalid");
    if (invalidElements.length === 0) {
        alert("Đăng ký thành công!");
        window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
    } else {
        alert("Vui lòng kiểm tra lại thông tin trước khi gửi!");
    }
}

// Xử lý form đăng nhập
document.getElementById("loginEmailPhone").addEventListener("blur", function () {
    const input = this.value.trim();
    if (!input) {
        setError(this, "Vui lòng không bỏ trống!");
    } else if (!isValidEmail(input) && !isValidPhone(input)) {
        setError(this, "Email phải có @gmail.com hoặc số điện thoại bắt đầu bằng 0 và có đủ 10 số.");
    } else {
        setError(this, "");
    }
});

document.getElementById("Password").addEventListener("blur", function () {
    const password = this.value.trim();
    if (!password) {
        setError(this, "Mật khẩu không được để trống!");
    } else if (!isValidPassword(password)) {
        setError(this, "Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số.");
    } else {
        setError(this, "");
    }
});


function validateLoginForm() {
    const loginEmailPhone = document.getElementById("loginEmailPhone");
    const password = document.getElementById("Password");

    loginEmailPhone.dispatchEvent(new Event("blur"));
    password.dispatchEvent(new Event("blur"));

    const invalidElements = document.querySelectorAll(".is-invalid");
    if (invalidElements.length === 0) {
        const rememberMe = document.getElementById("rememberMe").checked;
        if (rememberMe) {
            if (confirm("Bạn có muốn ghi nhớ tài khoản cho lần đăng nhập tiếp theo?")) {
                alert("Đăng nhập thành công!");
                window.location.href = "Trangchu.html";
            } else {
                window.location.href = "Trangchu.html";
            }
        } else {
            alert("Đăng nhập thành công!");
            window.location.href = "Trangchu.html";
        }
    } else {
        alert("Vui lòng kiểm tra lại thông tin đăng nhập!");
    }
}
