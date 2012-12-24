[1]: http://wordpress.org/extend/plugins/google-xml-sitemaps-v3-for-qtranslate/ "Google XML Sitemaps v3 for qTranslate"

# 针对Google XML Sitemaps v3 for qTranslate的修改

修改sitemap-core.php，使其在生成分类目录(category)和标签(tag)页的url时也添加lastmod,如下
<pre>
&lt;url>
    &lt;loc>http://blog.atime.me/tag/ssh/&lt;/loc> 
    &lt;lastmod>2012-12-11T08:44:37+00:00&lt;/lastmod> 
    &lt;changefreq>weekly&lt;/changefreq> 
    &lt;priority>0.3&lt;/priority> 
&lt;/url> 
</pre>
如果使用[Google XML Sitemaps v3 for qTranslate][1]3.2.8.1版本，可以直接使用patch文件。
