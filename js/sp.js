// Hàm kiểm tra tên hợp lệ (viết hoa chữ cái đầu tiên, không dấu)
function validateName() {
    const name = document.getElementById('name');
    name.addEventListener('blur', () => {
        console.log('Validating name:', name.value.trim()); // Log giá trị nhập vào để gỡ lỗi
        // Biểu thức chính quy: Chữ đầu tiên viết hoa, không dấu, và các ký tự tiếp theo là chữ thường
        const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if (name.value.trim() === "") {
            document.getElementById('nameError').textContent = "Họ và tên không được để trống.";
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
        } else if (!nameRegex.test(name.value.trim())) {
            document.getElementById('nameError').textContent = "Họ và tên phải bắt đầu bằng chữ hoa, tối thiểu 2 từ và không dấu (Ví dụ: Nguyen Van An)";
            name.classList.add('is-invalid');
            name.classList.remove('is-valid');
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
            document.getElementById('nameError').textContent = "";
        }
    });
}

// Hàm kiểm tra email hợp lệ
function validateEmail() {
    const email = document.getElementById('email');
    email.addEventListener('blur', () => {
        console.log('Validating email:', email.value.trim()); // Log giá trị nhập vào để gỡ lỗi
        const emailRegex = /^[^\s@]+@gmail\.com$/;

        if (email.value.trim() === "") {
            document.getElementById('emailError').textContent = "Email không được để trống.";
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        } else if (!emailRegex.test(email.value.trim())) {
            document.getElementById('emailError').textContent = "Email phải đúng định dạng và phải có @gmail.com";
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            document.getElementById('emailError').textContent = "";
        }
    });
}

// Hàm kiểm tra số điện thoại hợp lệ
function validatePhone() {
    const phone = document.getElementById('phone');
    phone.addEventListener('blur', () => {
        console.log('Validating phone:', phone.value.trim()); // Log giá trị nhập vào để gỡ lỗi
        const phoneRegex = /^0\d{9}$/;

        if (phone.value.trim() === "") {
            document.getElementById('phoneError').textContent = "Số điện thoại không được để trống.";
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
        } else if (!phoneRegex.test(phone.value.trim())) {
            document.getElementById('phoneError').textContent = "Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0";
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
        } else {
            phone.classList.remove('is-invalid');
            phone.classList.add('is-valid');
            document.getElementById('phoneError').textContent = "";
        }
    });
}

// Hàm kiểm tra phản hồi không để trống
function validateFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.addEventListener('blur', () => {
        console.log('Validating feedback:', feedback.value.trim()); // Log giá trị nhập vào để gỡ lỗi
        if (feedback.value.trim() === "") {
            document.getElementById('feedbackError').textContent = "Phản hồi không được để trống";
            feedback.classList.add('is-invalid');
            feedback.classList.remove('is-valid');
        } else {
            feedback.classList.remove('is-invalid');
            feedback.classList.add('is-valid');
            document.getElementById('feedbackError').textContent = "";
        }
    });
}

// Gọi các hàm kiểm tra khi người dùng rời khỏi ô nhập liệu
validateName();
validateEmail();
validatePhone();
validateFeedback();

// Khi form được submit
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi form nếu có lỗi

    // Kiểm tra lại tất cả các trường
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const feedback = document.getElementById('feedback');

    console.log('Submitting form with values:', {
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        feedback: feedback.value.trim()
    }); // Log giá trị form để gỡ lỗi

    name.dispatchEvent(new Event('blur'));
    email.dispatchEvent(new Event('blur'));
    phone.dispatchEvent(new Event('blur'));
    feedback.dispatchEvent(new Event('blur'));

    // Nếu tất cả các trường hợp đều hợp lệ
    const isFormValid = document.querySelectorAll('.is-invalid').length === 0;

    if (isFormValid) {
        alert("Phản hồi của bạn đã được gửi thành công!");
        window.location.href = "Trangchu.html"; // Chuyển sang trang chủ
    } else {
        alert("Vui lòng kiểm tra lại các trường thông tin trước khi gửi.");
    }
});
