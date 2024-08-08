
document.getElementById('searchBox').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let dropdown = document.getElementById('dropdown');
    let items = dropdown.querySelectorAll('.dropdown-item');

    if (filter.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }

    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('searchBox').value = this.textContent;
        document.getElementById('dropdown').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        document.getElementById('dropdown').style.display = 'none';
    }
});
