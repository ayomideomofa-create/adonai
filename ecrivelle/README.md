# Your writing & publishing website

Nine pages: Home, About, Services, My Work (portfolio), Process, Why Work With Me, Testimonials, FAQ, Contact.

## Update everything from ONE file
Open `assets/js/content.js` in any text editor (Notepad, VS Code). Save and refresh the browser.

| What | Where in content.js |
|---|---|
| Brand name, your name, email | `SITE.brand`, `SITE.person`, `SITE.email` |
| Contact buttons (WhatsApp, Upwork, Fiverr…) | `SITE.channels` — delete a line to hide it |
| Social links | `SITE.socials` |
| Statistics band | `STATS` — stays hidden until you add real numbers |
| Service cards | `SERVICES` |
| Portfolio projects | `PORTFOLIO` |
| Testimonials | `TESTIMONIALS` |

### Add a portfolio project
1. Put the cover image in `assets/img/portfolio/` (JPG/WebP, about 800×1000px, under 300 KB).
2. Copy one `{ ... }` block in `PORTFOLIO`, paste it, edit the text.
3. Set `cover.image` to e.g. `"assets/img/portfolio/my-book.jpg"` (leave `""` for the styled book mockup).
4. Choose a sample type: `excerpt` (text), `before-after` (editing), `images` (list of image paths), or `link` (a PDF or Google Drive URL with `url` and `label`).
5. Set `placeholder: false`. The current projects are illustrative samples (tagged "Sample"); delete them as your real projects go in.

### Add a testimonial
Copy a block in `TESTIMONIALS` and paste the client's exact words, project title, date and rating. Add `featured: true` to the one shown large on the home page. Use a client's real name only with their permission.

### Your photo
Save it as `assets/img/portrait.jpg`, then in `about.html` replace the comment inside `<div class="portrait">` with:
`<img src="assets/img/portrait.jpg" alt="Portrait of Your Name">`

### Make the contact form email you
It's already set up with FormSubmit to send enquiries to joyomofaadeyanju71@gmail.com.
After the site is live, send yourself a test message: FormSubmit emails you a one-time
confirmation link. Click it, and every enquiry after that lands in your inbox.
(If the service is unreachable, the form falls back to opening the visitor's email app.)

### Page titles (SEO)
Each page's `<title>` and `<meta name="description">` sit at the top of its .html file. If you change the brand name, also update it in those titles (find & replace "ÉCRIVELLE").

## Going live
Drag the whole folder onto https://app.netlify.com/drop (free), or upload it to any web host. Then connect your domain.
