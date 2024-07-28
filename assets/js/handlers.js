const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach(function(link, index) {
    link.addEventListener('click', function(event) {

        const svg = this.querySelector('svg');
        const path = this.querySelector('svg path');
        
        const faqAnswer = this.nextElementSibling;
        const faqGroup = event.target.parentNode;
        
        if(faqAnswer.classList.contains('open')) {
            faqAnswer.classList.remove('open');
            svg.setAttribute('height', '12');
            svg.setAttribute('viewBox', '0 0 12 12');
            path.setAttribute('d', 'M5.5 6.5H0.5C0.358333 6.5 0.239583 6.45202 0.14375 6.35605C0.0479167 6.2601 0 6.14119 0 5.99932C0 5.85746 0.0479167 5.73877 0.14375 5.64327C0.239583 5.54776 0.358333 5.5 0.5 5.5H5.5V0.5C5.5 0.358333 5.54798 0.239583 5.64395 0.14375C5.7399 0.0479167 5.85881 0 6.00068 0C6.14254 0 6.26123 0.0479167 6.35673 0.14375C6.45224 0.239583 6.5 0.358333 6.5 0.5V5.5H11.5C11.6417 5.5 11.7604 5.54798 11.8562 5.64395C11.9521 5.7399 12 5.85881 12 6.00068C12 6.14254 11.9521 6.26123 11.8562 6.35673C11.7604 6.45224 11.6417 6.5 11.5 6.5H6.5V11.5C6.5 11.6417 6.45202 11.7604 6.35605 11.8562C6.2601 11.9521 6.14119 12 5.99932 12C5.85746 12 5.73877 11.9521 5.64327 11.8562C5.54776 11.7604 5.5 11.6417 5.5 11.5V6.5Z');
            faqGroup.style.borderColor = 'rgba(44, 44, 44, 1)';
        } else {
            faqAnswer.classList.add('open');
            svg.setAttribute('height', '2');
            svg.setAttribute('viewBox', '0 0 12 2');
            path.setAttribute('d', 'M0.5 1.5C0.358333 1.5 0.239583 1.45202 0.14375 1.35605C0.0479167 1.2601 0 1.14119 0 0.999325C0 0.857458 0.0479167 0.738775 0.14375 0.643275C0.239583 0.547758 0.358333 0.5 0.5 0.5H11.5C11.6417 0.5 11.7604 0.547983 11.8562 0.64395C11.9521 0.7399 12 0.858809 12 1.00068C12 1.14254 11.9521 1.26123 11.8562 1.35673C11.7604 1.45224 11.6417 1.5 11.5 1.5H0.5Z');
            faqGroup.style.borderColor = 'rgba(255, 255, 255, 1)';
        }
    });
});