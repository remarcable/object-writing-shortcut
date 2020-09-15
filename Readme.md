# Object Writing Shortcut for iOS

> ### What is Object Writing?
> _Object writing is timed, sense-bound writing, usually done first thing in the morning. You pick an object- a real object, like a paper clip, a coffee cup, a Corvette – and treat it as a diving board to launch you inward to the vaults of your seven senses._
> – [objectwriting.com](https://objectwriting.com)


## This Project
The aim of this project is to use a [Shortcut](https://support.apple.com/guide/shortcuts/welcome/ios) on my iPhone to fetch the current word of the day from [objectwriting.com](https://objectwriting.com) and automatically create a 10-minute timer.
Since it's not easily possible to extract data from webpages in a shortcut (esp. not if it's dynamic), I wrote a small serverless function that returns the current word.

## Download
You can download the current version of the Shortcut [here](https://www.icloud.com/shortcuts/eb058ec96a3b4cce9a8a771a7f41d7f5). The API endpoint can be customized, but a default exists.
