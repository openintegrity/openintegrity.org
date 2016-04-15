#! /bin/bash
find -L . -name '*.jpg' -exec ditto \{\} ../_site/openintegrity.org/{\} \;
find -L . -name '*.png' -exec ditto \{\} ../_site/openintegrity.org/{\} \;
find -L . -name '*.svg' -exec ditto \{\} ../_site/openintegrity.org/{\} \;