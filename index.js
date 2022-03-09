
        $( ".change" ).on("click", function() {
            if( $( "body" ).hasClass( "dark" )) {
                $( "body" ).removeClass( "dark" );
                $( ".change" ).img( "himi" ).text("off");
            } else {
                $( "body" ).addClass( "dark" );
                $( ".change" ).img( "himi" ).text("on");
            }
        });
   