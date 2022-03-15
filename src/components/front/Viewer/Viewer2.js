<title>Sketchfab Viewer API</title>

    <!-- Insert this script -->
    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.0.js"></script>
</head>

<body>
    <!-- Insert an empty iframe with attributes -->
    <iframe src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

    <!-- Initialize the viewer -->
    <script type="text/javascript">
    var iframe = document.getElementById( 'api-frame' );
    var uid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

    // By default, the latest version of the viewer API will be used.
    var client = new Sketchfab( iframe );

    // Alternatively, you can request a specific version.
    // var client = new Sketchfab( '1.12.0', iframe );

    client.init( uid, {
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {

                // API is ready to use
                // Insert your code here
                console.log( 'Viewer is ready' );

            } );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        }
    } );
    </script>
</body>
</html>