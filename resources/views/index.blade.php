<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>王保的博客</title>
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <!-- Styles -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
