﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="rest_test_twitter.social.index" %>

<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />

	<title>Kaseya IT Systems Management User Conference | Kaseya Connect</title>
	<meta name="description" content="A gathering of the world's top IT systems management professionals.">
	<link rel="canonical" href="http://www.kaseyaconnect.com/social/" />
	<meta property="og:title" content="Join in the Conversation" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://www.kaseyaconnect.com/social/" />
	<meta property="og:description" content="A gathering of the world's top IT systems management professionals." />
	<meta property="og:image" content="http://www.kaseyaconnect.com/img/og-logo.jpg"/>

	<!-- Included CSS Files -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic,300,300italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="/css/foundation.css">
	<link rel="stylesheet" href="/css/site.css">

	<!--[if lt IE 9]>
		<link rel="stylesheet" href="/css/ie.css">
	<![endif]-->


	<!-- IE Fix for HTML5 Tags -->
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>
<body>
    <form id="form1" runat="server">

	<div class="container">

		<div class="row">

			<header>
				<div class="eight columns">
					<a href="/"><img src="/img/kaseya-connect-logo.png" alt="Kaseya Connect Logo"></a>
					<nav class="global">
						<ul class="btn-bar">
							<li><a href="/agenda/">Agenda</a></li>
							<li><a href="/live/">Watch Replay</a></li>
							<li class="selected"><a href="/social/">Social</a></li>
						</ul>
					</nav>
				</div>
				<div class="four columns">
					<ul class="social-icons">
						<li><a href="http://www.facebook.com/KaseyaFan" title="Connect with Facebook"><img src="/img/icon-facebook.png"></a></li>
						<li><a href="http://www.twitter.com/kaseyacorp" title="Connect with Twitter"><img src="/img/icon-twitter.png"></a></li>
						<li><a href="http://www.youtube.com/kaseyacorp" title="Connect with YouTube"><img src="/img/icon-youtube.png"></a></li>
						<li><a href="http://www.linkedin.com/company/kaseya" title="Connect with LinkedIn"><img src="/img/icon-linkedin.png"></a></li>
						<li><a href="http://gplus.to/kaseya" title="Connect with Google+"><img src="/img/icon-google.png"></a></li>
					</ul>
				</div>
			</header>

		</div>
		<!-- row -->

		<div class="row">
			<section class="social panel">

				<h1>Join The Conversation</h1>

				<section class="how-to-participate">
					<p>Participate by tagging tweets, check-ins or photos with the official Kaseya Connect 2013 hashtag&nbsp;<span class="green radius label">#KaseyaUC</span></strong><br>
					Or, you can send them the old fashioned way to us at <a href="mailto:KaseyaUC@kaseya.com?subject=Join the Conversation at Kaseya Connect 2013">KaseyaUC@kaseya.com</a>.</p>
					<a href="https://twitter.com/intent/tweet?button_hashtag=KaseyaUC" class="twitter-hashtag-button" data-size="large" data-related="KaseyaCorp">Tweet #KaseyaUC</a>
					<script>					    !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = "//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); } } (document, "script", "twitter-wjs");</script>
				</section>

				<section class="masonry">

					<!-- YOUR STUFF RENDERS HERE -->
                <asp:Literal ID="Literal1" runat="server"></asp:Literal>

				</section>

			</section>

		</div>

		<div class="row">

			<footer>
				<ul class="link-bar">
					<li><a href="/speakers/">Speakers</a></li>
					<li><a href="/floor-map/">Floor Map</a></li>
					<li><a href="/hotel-info/">Hotel Info</a></li>
					<li><a href="/general-info/">General Info</a></li>
				</ul>

				<ul class="social-icons">
					<li><a href="http://www.facebook.com/KaseyaFan" title="Connect with Facebook"><img src="/img/icon-facebook.png"></a></li>
					<li><a href="http://www.twitter.com/kaseyacorp" title="Connect with Twitter"><img src="/img/icon-twitter.png"></a></li>
					<li><a href="http://www.youtube.com/kaseyacorp" title="Connect with YouTube"><img src="/img/icon-youtube.png"></a></li>
					<li><a href="http://www.linkedin.com/company/kaseya" title="Connect with LinkedIn"><img src="/img/icon-linkedin.png"></a></li>
					<li><a href="http://gplus.to/kaseya" title="Connect with Google+"><img src="/img/icon-google.png"></a></li>
				</ul>
				<a href="http://www.kaseya.com"><img src="/img/kaseya-footer-logo.png" alt="Kaseya Logo"></a>
				<div class="legal">
					<p>Copyright © 2013 Kaseya International Limited. All rights reserved.</p>
					<p>Kaseya and the Kaseya k-bug logo are among the trademarks or registered trademarks owned by or licensed to Kaseya International Limited.</p>
					<p>All other brand and product names are or may be trademarks of, and are used to identify products or services of, their respective owners.</p>
				</div>
			</footer>

		</div>


	</div>
	<!-- container -->

	<!-- Included JS Files -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="/js/site-ck.js?v=1"></script>

    </form>
</body>
</html>
