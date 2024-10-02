// إضافة المنتجات إلى السلة
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const selectedProductsList = document.getElementById('selected-products');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        const productPrice = parseInt(button.parentElement.querySelector('.price').textContent.replace('السعر: ', '').replace(' دج', ''));

        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - ${productPrice} دج`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'حذف';
        removeButton.classList.add('remove-product');
        removeButton.addEventListener('click', () => {
            listItem.remove();
            totalPrice -= productPrice;
            totalPriceElement.textContent = `المجموع: ${totalPrice} دج`;
        });

        listItem.appendChild(removeButton);
        selectedProductsList.appendChild(listItem);

        totalPrice += productPrice;
        totalPriceElement.textContent = `المجموع: ${totalPrice} دج`;
    });
});

// إعدادات الأيقونة
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-visible');
    menu.classList.toggle('menu-hidden');
});
