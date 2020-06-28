# My Latex CV

This repo contains parts of my CV with all the components needed to build it.
I like having my resume source-controlled,
and I've also really enjoyed having PDF files built automatically using GitHub Actions.
I'm providing it in case someone would like to use it as a template.

## How to Build

You need to install [Latex](https://www.latex-project.org/) on your machine.
On Windows I use MikTex.
On Ubuntu and similar version of Linux: `sudo apt-get install texlive-latex-base`.

Building the resume can be done by running the following command:

```sh
pdflatex NabeelSuliemanCV.tex
```

## Build on Change

When I'm editing my CV, I want the PDF to build automatically whenever I make a change to the `.tex` file.
For this I've written a small NodeJS. It checks every 5 seconds to see if the file has changed and,
if it has, it rebuilds the file.
If you open the PDF in MikTex's PDF viewer, the viewer will automatically refresh the view.

To run this script, you need NodeJS and run it with the following command:

```sh
node watch.js
```

## GitHub Actions Build

I have two GitHub actions setup.
These actions allow me to make changes and build a PDF without installing Latex.
Whenever a branch is created, the PDF is built and saved as an artifact on the build.
Whenever a change is made to master, a new release is tagged and created.
