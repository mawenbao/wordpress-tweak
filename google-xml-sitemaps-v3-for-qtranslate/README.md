[1]: http://wordpress.org/extend/plugins/google-xml-sitemaps-v3-for-qtranslate/ "Google XML Sitemaps v3 for qTranslate"

# 针对Google XML Sitemaps v3 for qTranslate的修改

## 修改内容和使用方法
修改sitemap-core.php，使其在生成分类目录(category)和标签(tag)页的url时也添加lastmod,如下
<pre>
&lt;url>
    &lt;loc>http://blog.atime.me/tag/ssh/&lt;/loc> 
    &lt;lastmod>2012-12-11T08:44:37+00:00&lt;/lastmod> 
    &lt;changefreq>weekly&lt;/changefreq> 
    &lt;priority>0.3&lt;/priority> 
&lt;/url> 
</pre>
如果使用[Google XML Sitemaps v3 for qTranslate][1]3.2.8.1版本，可以直接使用[patch](https://github.com/wilbur-ma/wordpress-tweak/blob/master/patch/google-xml-sitemaps-v3-for-qtranslate-3.2.8.1.patch)文件。

## 不足之处
*  删除文章(post)和页面(page)时，无法删除对应的页面缓存，也无法更新包含删除文章或页面的缓存(比如文章存档，月归档，标签和文章分类页面)等，请手动删除对应的缓存。
