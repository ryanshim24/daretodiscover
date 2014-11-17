# Dare To Discover... wine?

In this lab we will use AJAX to request data from an API about wine.
We will use jQuery make an AJAX request to
[http://daretodiscover.net/wine](http://daretodiscover.net/wine) and display
the resulting list of wines.  This should all be done in the context
of a Ruby on Rails app.

## Steps ##

1. Create a Ruby on Rails app.
2. Make a controller and route that renders a home page.
3. On the home page, include JavaScript that calls
   [http://daretodiscover.net/wine](http://daretodiscover.net/wine).
    - Hint: by default Rails gives us a `.coffee` file. Replace it
      with a `.js` file and remove the coffeescript-style comments.
    - Hint: use one of jQuery's `$.ajax` or `$.getJSON()` methods.
4. When the results are returned, make sure you can log them to the
   `console`.
    - Ponder: what datatype is the result?
    - Ponder: how will you be able to turn the returned data into an
    HTML list?
5. Start to render the list of wines onto the page via JavaScript and
   realize there must be a better way.
    - Hint: would you use `document.createElement("ul")`?
    - Hint: could you use `$("<ul>")`?
6. Decide to integrate Handlebars templates instead of using either
   of those options.

## Handlebars Steps ##

7. Include the `handlebars_assets` gem in your Gemfile.

        # Gemfile
        gem 'handlebars_assets'

8.  Don't forget to run `bundle install`

        bundle install

9.  Add the following lines to  `application.js` so it includes the
    Handlebars templates you're about to create.

        //= require handlebars.runtime
        //= require_tree ./templates

    Careful: Does the
    [handlebars_assets documentation](https://github.com/leshill/handlebars_assets#templates-directory)
    say anything specific about where `require_tree ./templates` needs
    to be included relative to `require_tree .`?


10. Create a folder called `templates` in your
    `app/assets/javascripts` folder.

        # inside of app/assets/javascripts directory
        mkdir templates

11. Add a `.hbs` template in your newly created `templates` directory.

        # inside of templates directory
        touch wine.hbs

12. Add some [Handlebars syntax](http://handlebarsjs.com/) to your
    `.hbs` file.

13. In your original JavaScript file, access your new template though

        var template = HandlebarsTemplates["wine"];
        var str = template(wineResultsJSON);
        # render that str to the page

14. Fix bugs (and read docs) until it works.
