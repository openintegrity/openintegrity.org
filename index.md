---
layout: default
---

## Rebooting Open Integrity

The Open Integrity Initiative is [rebooting](reboot).

We aim to answer **reliably and consistently** questions such as: 

- Which tools are open-source? 
- Which tools provide end-to-end encryption? 
- Which implement forward secrecy or support two-factor authentication? 
- Which have security features that are usable without prior expertise or training? 
- Which can be downloaded securely and verified to be authentic? 

You can read more [about the project](about).

<div class="related">
  <h3>Recent Blog Posts</h3>
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

