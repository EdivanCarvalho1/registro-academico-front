// Gerar dias do mês
const calendar = document.getElementById('calendar');

const daysInMonth = 30; // Abril
const highlightDays = [3, 4, 5];
const today = 7;

for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';

    if (highlightDays.includes(i)) {
        day.classList.add('highlight');
    }
    if (i === today) {
        day.classList.add('today');
    }

    day.innerText = i;
    calendar.appendChild(day);
}

// Adicionar tarefas
const taskList = document.getElementById('task-list');
const tasks = [
    { title: 'Matrícula de disciplinas', status: 'Pendente' },
    { title: 'Matrícula de disciplinas', status: 'Pendente' },
    { title: 'Matrícula de disciplinas', status: 'Pendente' },
    { title: 'Matrícula de disciplinas', status: 'Pendente' },
    { title: 'Matrícula de disciplinas', status: 'Entregue' },
    { title: 'Matrícula de disciplinas', status: 'Entregue' },
    { title: 'Matrícula de disciplinas', status: 'Entregue' },
    { title: 'Matrícula de disciplinas', status: 'Entregue' },
];

tasks.forEach(task => {
    const item = document.createElement('div');
    item.className = 'list-group-item d-flex align-items-center justify-content-between';

    const left = document.createElement('div');
    left.className = 'd-flex align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    if (task.status === 'Entregue') checkbox.checked = true;

    const title = document.createElement('span');
    title.innerText = task.title;

    left.appendChild(checkbox);
    left.appendChild(title);

    const right = document.createElement('div');
    right.className = 'd-flex align-items-center';

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/30';
    img.className = 'rounded-circle me-2';
    img.alt = 'Perfil';

    const status = document.createElement('span');
    status.innerText = task.status;
    status.className = task.status === 'Pendente' ? 'text-warning' : 'text-dark';

    right.appendChild(img);
    right.appendChild(status);

    item.appendChild(left);
    item.appendChild(right);

    taskList.appendChild(item);
});
