// Product Form Functions
function showProductForm() {
    document.getElementById('productModal').classList.remove('hidden');
}

function hideProductForm() {
    document.getElementById('productModal').classList.add('hidden');
}

// Handle discount checkbox
document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    document.getElementById('discountField').classList.toggle('hidden', !this.checked);
});

// Handle image upload preview
document.getElementById('productImages').addEventListener('change', function (e) {
    const previewContainer = document.getElementById('imagePreviews');
    previewContainer.innerHTML = '';

    if (this.files) {
        Array.from(this.files).slice(0, 5).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'w-20 h-20 object-cover rounded border';
                previewContainer.appendChild(img);
            }
            reader.readAsDataURL(file);
        });
    }
});

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would normally send data to server
    alert('محصول با موفقیت ایجاد شد!');
    hideProductForm();
    // In a real app, you would add the new product to the table
});

// Toggle mobile menu
document.querySelector('.md\\:hidden').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('hidden');
});

// Product Actions
function editProduct() {
    showProductForm();
    // In a real app, you would populate the form with product data
    alert('در حال ویرایش محصول...');
}

function deleteProduct() {
    if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
        alert('محصول با موفقیت حذف شد!');
        // In a real app, you would remove the product from the table
    }
}

// Initialize charts
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        datasets: [{
            label: 'مبلغ فروش (میلیون تومان)',
            data: [10, 22, 18, 35, 26, 32, 40],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.05)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                rtl: true,
                callbacks: {
                    label: function (context) {
                        return 'فروش: ' + context.parsed.y + ' میلیون تومان';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + 'M';
                    }
                }
            }
        }
    }
});

const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
    type: 'bar',
    data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        datasets: [{
            label: 'بازدید روزانه',
            data: [1200, 1900, 1500, 2100, 2500, 2300, 2800],
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                rtl: true,
                callbacks: {
                    label: function (context) {
                        return 'بازدید: ' + context.parsed.y;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
