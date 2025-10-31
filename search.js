document.addEventListener('DOMContentLoaded', (event) => {
    const searchInput = document.getElementById('searchInput');
    
    // null check
    if (searchInput) {
        searchInput.addEventListener('keyup', handleSearch);
    }
});

function handleSearch() {
    // 1. সার্চ বারের টেক্সট নিন (ছোট হাতের অক্ষরে)
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. সব অ্যাপ কার্ডগুলো নিন
    const appGrid = document.getElementById('appGrid');
    const apps = appGrid.getElementsByClassName('app-card');

    // 3. প্রতিটি কার্ডের টাইটেল চেক করুন
    for (let i = 0; i < apps.length; i++) {
        const app = apps[i];
        const appTitleElement = app.querySelector('.app-title');
        
        if (appTitleElement) {
            const appTitle = appTitleElement.textContent.toLowerCase();
            
            // 4. যদি টাইটেলের সাথে সার্চ টার্ম মিলে যায়
            if (appTitle.includes(searchTerm)) {
                app.classList.remove('hidden'); // অ্যাপটি দেখান
            } else {
                app.classList.add('hidden'); // অ্যাপটি লুকিয়ে ফেলুন
            }
        }
    }
}
