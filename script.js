const habits = [
    "Drink at least 8 glasses of water daily.",
    "Exercise for 30 minutes.",
    "Eat a balanced meal with veggies and protein.",
    "Get 7-9 hours of sleep each night.",
    "Practice deep breathing or meditation for 5-10 minutes.",
    "Journal or reflect on three things you're grateful for.",
    "Limit screen time before bed.",
    "Practice positive affirmations or self-compassion.",
    "Connect with a friend or loved one daily.",
    "Read for 20 minutes.",
    "Make your bed in the morning.",
    "Plan your top 3 priorities for the day.",
    "Take short breaks every hour during work.",
    "Declutter one small area.",
    "Review and update your to-do list at day's end.",
    "Learn something new.",
    "Set a small goal and track progress weekly.",
    "Practice mindfulness or a hobby for fun.",
    "Volunteer or help someone else once a week.",
    "Reflect on what went well and what to improve."
];

const habitsList = document.getElementById('habits-list');
const countSpan = document.getElementById('count');
const resetBtn = document.getElementById('reset-btn');

let completed = JSON.parse(localStorage.getItem('completedHabits')) || new Array(habits.length).fill(false);

function renderHabits() {
    habitsList.innerHTML = '';
    let count = 0;
    habits.forEach((habit, index) => {
        const div = document.createElement('div');
        div.className = 'habit';
        if (completed[index]) {
            div.classList.add('completed');
            count++;
        }
        div.innerHTML = `
            <input type="checkbox" class="checkbox" ${completed[index] ? 'checked' : ''} data-index="${index}">
            ${habit}
        `;
        habitsList.appendChild(div);
    });
    countSpan.textContent = count;
}

habitsList.addEventListener('change', (e) => {
    if (e.target.classList.contains('checkbox')) {
        const index = e.target.dataset.index;
        completed[index] = e.target.checked;
        localStorage.setItem('completedHabits', JSON.stringify(completed));
        renderHabits();
    }
});

resetBtn.addEventListener('click', () => {
    completed.fill(false);
    localStorage.setItem('completedHabits', JSON.stringify(completed));
    renderHabits();
});

renderHabits();
if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }