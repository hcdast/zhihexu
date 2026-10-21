'use strict';
document.getElementById('year').textContent = String(new Date().getFullYear());
// 可接入统计系统：监听 zhihexu:product-click，或读取产品链接的 data-product。
// 默认只派发本地事件，不发送访问数据。
document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('zhihexu:product-click', {
      detail: { product: link.dataset.product, placement: 'product-card' }
    }));
  });
});
