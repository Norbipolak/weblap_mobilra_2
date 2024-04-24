/*
To place the <input> element below the <select> element while ensuring they're both styled similarly, 
you can wrap them inside a container element and use CSS to control their layout. 

<div class="container">
    <select class="select-input">
        <option>Whole Bean</option>
        <option>Mild Roast</option>
        <option>Dark Roast</option>
    </select>
    <input type="number" class="select-input" min="1">
</div>

.container {
    display: flex;
    flex-direction: column;
}

.select-input {
    margin-bottom: 5px;  Adjust spacing between select and input 
}

The <select> and <input> elements are wrapped inside a <div> with the class container
.
The .container class applies display: flex; and flex-direction: column; to stack its children vertically.

The .select-input class is added to both the <select> and <input> elements to style them similarly.

The margin-bottom property creates some spacing between the <select> and <input> elements. Adjust the value as needed.
**********************************************************************************************************
Mire jó a href link, az a tag-nél 


The href attribute in an <a> tag (anchor tag) is used to specify the URL of the page 
that the link should point to when clicked. It stands for "Hypertext Reference."

<a href="https://example.com">Visit Example Website</a>

!!!!!!!!!!!!!!!!!!
The href attribute can also be used to create internal links 
within the same webpage by specifying the ID of an element on the page.

<a href="#section">Jump to Section</a>

In this case, clicking on the link would scroll the page to the element with the ID of section
*****************************************************************************************************************
embedded map a weboldalunkon 

To embed a Google Map into a webpage, you can use the Google Maps Embed API.

1. Go to the Google Maps website: https://www.google.com/maps
2. Search for the location you want to embed on your webpage.
3. Once you've found the location, click on the "Share" button.
4. In the popup that appears, click on the "Embed a map" tab.
5. Customize the map size and other options as needed.
6. Copy the HTML code provided in the "Copy HTML" section.
7. Paste the HTML code into your webpage where you want the map to appear.

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2690257800617!2d-122.41991608467311
!3d37.77492957975787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e5b6e3d25a5%3A0x40202b2ad71b400
!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1649272200250!5m2!1sen!2sus"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

This code will embed a Google Map of the Golden Gate Bridge in San Francisco. 
You can adjust the width, height, and other attributes of the <iframe> tag as needed.

Mire jó az iframe!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4


The <iframe> (inline frame) element in HTML is primarily used to embed another HTML document within the current document. 
Here are some common uses of the <iframe> element:

1.Embedding external content: You can use <iframe> to embed content from external sources such as 
maps, videos, social media feeds, or other web pages into your own webpage.

2. Displaying advertisements: Ad networks often provide code snippets 
that you can embed using <iframe> to display ads on your webpage.

3. Loading content asynchronously: You can use <iframe> to load content asynchronously, 
allowing parts of your webpage to load independently of the rest of the page. 
This can improve page load times and user experience.

4. Embedding web applications: <iframe> can be used to embed web applications or widgets into your webpage, 
such as a calendar, calculator, or chat widget.

5. Embedding documents: You can use <iframe> to embed documents such as PDF files or Google Docs into your webpage, 
allowing users to view the content directly within the page.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

it's possible that the video ad on a news portal is embedded using an <iframe>. 
Ad networks often provide code snippets for publishers to embed ads on their websites, 
and these snippets may utilize <iframe> to display the ad content

<iframe src="https://adnetwork.com/video-ad" width="300" height="250" frameborder="0" scrolling="no"></iframe>

1. frameborder: This attribute specifies whether or not to display a border around the iframe. 
When frameborder="0", it means that no border will be displayed. 
If frameborder is not specified or set to a value other than "0", a border will be displayed.

2. scrolling: This attribute specifies whether or not to display scrollbars within the iframe 
if its content exceeds the dimensions specified by the width and height attributes. 
When scrolling="no", it means that scrollbars will not be displayed, and the content will be cropped if it exceeds the dimensions of the iframe. 
If scrolling is not specified or set to "yes", scrollbars will be displayed if needed.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*************************************************************************************************************************
középre helyezés vertikálisan és horizontálisan is 
1. .container {
    display: flex;
    justify-content: center;  Horizontally center 
    align-items: center;  Vertically center 
    height: 100vh;  Set container height 
}

2. .container {
    display: grid;
    place-items: center; Center both horizontally and vertically 
    height: 100vh;  Set container height
}

3. .container {
    position: relative;
    }

    .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

4. .container {
    position: relative;
    }

    .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;  Half of the element's height 
    margin-left: -50px;  Half of the element's width 
}

5. .container {
    display: table-cell;
    text-align: center;  Horizontally center 
    vertical-align: middle;  Vertically center
    height: 100vh;  Set container height 
}

!!!!!!!!!!!!
.container {
    display: grid;
    height: 100vh;  Set container height 
}
.centered {
    margin: auto;  Center both horizontally and vertically 
}









*/