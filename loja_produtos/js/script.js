// Aqui você pode adicionar scripts para funcionalidades adicionais, como filtragem de produtos
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.querySelector('input[placeholder="Filtrar por categoria..."]');
    const listItems = document.querySelectorAll('.list-group-item');

    filterInput.addEventListener('input', function() {
        const filterValue = filterInput.value.toLowerCase();
        listItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filterValue) ? '' : 'none';
        });
    });
});