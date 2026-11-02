const search = document.querySelector('#search');
const year = document.querySelector('#year');
const rows = [...document.querySelectorAll('tbody tr')];
function filterMeetings() {
 const query = search.value.trim().toLocaleLowerCase();
 let count = 0;
 for (const row of rows) {
  const visible = (!year.value || row.dataset.year === year.value) && row.textContent.toLocaleLowerCase().includes(query);
  row.hidden = !visible; if (visible) count++;
 }
 document.querySelector('#count').textContent = `${count} ${count === 1 ? 'meeting' : 'meetings'}`;
 document.querySelector('#empty').hidden = count !== 0;
}
search.addEventListener('input', filterMeetings);
year.addEventListener('change', filterMeetings);
document.querySelector('.filters').addEventListener('reset', () => { requestAnimationFrame(filterMeetings); });
