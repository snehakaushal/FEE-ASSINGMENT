function downwhile(parent, url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'download.mp3';
    parent.appendChild(link);
    link.click();
    parent.removeChild(link);
}

const parentElement = document.getElementById('download-container');
const mp3Url = 'https://archive.org/download/AuldLangSyne/Auld_Lang_Syne.mp3';

document.getElementById('download-button').addEventListener('click', () => {
    downwhile(parentElement, mp3Url);
});
