// Gerar dias do mês
function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const header = document.getElementById('month-year');
    calendar.innerHTML = ''; // Limpa antes de recriar

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1).getDay(); // Dia da semana do 1º dia
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total de dias

    // Mês e ano no cabeçalho
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    header.textContent = `${monthNames[month]} ${year}`;

    // Espaços vazios até o primeiro dia
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        calendar.appendChild(empty);
    }

    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.classList.add('calendar-day');
        cell.textContent = day;

        // Destacar o dia atual
        if (day === today.getDate()) {
            cell.classList.add('today');
        }

        calendar.appendChild(cell);
    }
}

// Gera ao carregar
renderCalendar();

// Atualiza automaticamente à meia-noite
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        renderCalendar();
    }
}, 60000); // Verifica a cada minuto


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
