import css from 'styled-jsx/css'

export const globals = css.global`
* {
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: #FFF7C7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #FFF7C7; /* Gecko Browsers */
}

/*
* Globals
*/
body {
  color: #000;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.03em;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.4em;
}
a {
  color: #72767B;
  line-height: 28px;
  text-decoration: none;
}
p a {
  text-decoration: underline;
}
h2, h3, h4, h5, h6 {
  font-weight: 300;
}
h1 {
  font-family: 'Work Sans', sans-serif;
  font-size: 42px;
  font-weight: normal;
  line-height: 52px;
  letter-spacing : 1.14;
  margin-bottom: 1rem;
}
h2, h2 a {
  margin-bottom: 1rem;
  font-size: 32px;
  font-weight: 700;
  letter-spacing : 0.85;
  line-height: 42px;
}
h3, h3 a {
  margin-bottom: 1rem;
  font-size: 20px;
  letter-spacing : 0.52;
  line-height: 34px;
}
p {
  margin-bottom: 20px;
}
pre, ul {
  margin-bottom: 20px;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
img {
  max-width: 100%;
}
.container, header, footer {
  margin: auto;
}
.content-section {
  margin-bottom: 3.75rem;
}
.quote blockquote {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
.container {
  padding: 0 20px;
}
.grey {
  color: #000;
}
.pad-10 {
  padding: 10px;
}
.pad-20 {
  padding: 20px;
}
.fw500 {
  font-weight: 500;
}
.floatR {
  float: right;
}

@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 2rem;
  }
}
`
