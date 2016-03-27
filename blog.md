---
layout: page
title: Blog
---

<div class="related">
  <ul class="related-posts">
    {% for post in site.posts limit:3 %}
      <li>
        <h3>
          <a href="{{ site.baseurl }}{{ post.url }}">
            {{ post.title }}
            <small>{{ post.date | date_to_string }}</small>
          </a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>