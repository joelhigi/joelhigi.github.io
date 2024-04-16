$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

const downloadButton = document.getElementById('getResume');
const downloadButton2 = document.getElementById('downloadResButton');

downloadButton.addEventListener('click', function() {
    console.log('clicked1');
  const fileUrl = 'resume/Joel Higiro - CV.pdf'; 
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'Joel Higiro - CV.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove(); 
});

downloadButton2.addEventListener('click', function() {
    console.log('clicked2');
    const fileUrl = 'resume/Joel Higiro - CV.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Joel Higiro - CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove(); 
  });