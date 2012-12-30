// my custom javascript for wordpress3

// for clean archives reloaded plugin
jQuery(document).ready(function() {
    var expandAllStr = '展开所有月份';
    var collapseAllStr = '折叠所有月份';

    jQuery('.car-collapse').find('.car-monthlisting').hide();
    jQuery('.car-collapse').find('.car-monthlisting:first').show();
    jQuery('.car-collapse').find('.car-yearmonth').click(function() {
        jQuery(this).next('ul').slideToggle('fast');
    });
    jQuery('.car-collapse').find('.car-toggler').click(function() {
        if ( expandAllStr == jQuery(this).text() ) {
            jQuery(this).parent('.car-container').find('.car-monthlisting').show();
            jQuery(this).text(collapseAllStr);
        }
        else {
            jQuery(this).parent('.car-container').find('.car-monthlisting').hide();
            jQuery(this).text(expandAllStr);
        }
    return false;
    });
});

// for social medias connected plugin
window.smcAction=function(url){
    url=url||window.location.href;
    window.location.href=url.replace(/&smc.*/i,"");
    setTimeout(function(){
        window.location.reload();
    },1000);
    return true;
}

// for gogole analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36863664-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
