const activeUsersCtx = document.getElementById('activeUsersChart').getContext('2d');
const salesOverviewCtx = document.getElementById('salesOverviewChart').getContext('2d');

const activeUsersChart = new Chart(activeUsersCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Active Users',
            data: [50, 60, 70, 55, 65, 80],
            backgroundColor: 'rgba(255, 0, 127, 0.1)',
            borderColor: '#ff007f',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

const salesOverviewChart = new Chart(salesOverviewCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales Overview',
            data: [3000, 4000, 2000, 5000, 6000, 7000],
            backgroundColor: '#ff007f',
            borderColor: '#ff007f',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
