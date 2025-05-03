---
title: "My MacOS Monterey Setup"
date: 2022-12-30
authors: [fsferrara]
tags:
  - writing
  - productivity
---
# My MacOS Monterey Setup

I think you are supposing I am a macOS fan... but I am not! Linux is my favourite OS, so why I spent time customizing macOS? I am also a software developer and, like many others, I have been asked to use macOS.

The experience was very frustrating at the beginning and I suspect the main issue was the entire Mission Control system. Typical questions: "Where is the window I opened a moment ago?", "Why the order of the spaces keeps changing?", "Do I really need those fancy animations?".
Then I spent a couple of days in macOS customization and I'd like to thank the other blogger who shared their configs. The result is a Windows/Linux-like desktop setup, that tries to leverage default macOS behaviour as much as possible. In the specific, I mean a setup that is fast, keyboard-centric and without distractions.  
Now, let's describe the setup in detail following a recipe-style format so I (and you) can re-execute the same recipe if I'll need it.

<!-- truncate -->

## 1. Spaces

### 1.1 Create 9 spaces.
Spaces in macOS are what other OSs call virtual desktops or just desktops. I use a fixed number of spaces (9), avoiding creating/destroying them.
Personally, I use spaces more than full-screen apps. This setup works with full-screen apps too, though.

### 1.2 The space order should not change
The nice Mission Control thinks it knows which is the optimal space order for us. And keeps changing the order as you switch apps. Probably this is good for the average user... but we're power users, right? To disable this:
- Open System Preferences > Mission Control
  - Uncheck "Automatically rearrange Spaces based on most recent use"

### 1.3 Use a shortcut to change space
Shortcuts are convenient to use with a fixed spaces number/order. To enable them:

- Open System Preferences > Keyboard > Shortcuts > Mission Control
  - Select ^1 to ^9 to switch to the related desktop (note: `^` is the CTRL key)

BTW this is the reason I suggest creating 9 spaces. You can't assign a shortcut to a space if it doesn't exist. At this point, you may delete and re-create the spaces and MacOS will remember the shortcut.

### 1.4 Make it clear which is the current space
I find it useful to have a space indicator. [SpaceID](https://github.com/dshnkao/SpaceId/releases) (`brew install --cask spaceid`) shows the desktop number in the menu bar. In the preferences, I choose to have one "Icon per Space", so that it displays an array of 9 spaces. And yes, it works with a multimonitor setup as well.


## 2. Disable desktop feature

### 2.1 No desktop icons
The desktop icons are an outdated concept. Do we really need to create that mess on the screen?
macOS allows disabling the desktop feature. But not by default... we need an app to customize this behaviour.
- Install [TinkerTool](http://www.bresink.com/osx/TinkerTool.html). It is an application to access selected preference settings of your personal user account which are not visible in System Preferences.
- Open TinkerTool > Finder
  - check "disable desktop feature".

### 2.2 Use a plain desktop background
Pretty pictures are nice. Using them as a desktop background is distracting and keeps you more time at your desk.
MacOS provides by default single-colour desktop pictures. In the system preferences, go to:

- Desktop & Screen Saver
  - Desktop
    - Apple > Colors
      - select a single colour as desktop wallpaper.

Use them to stay focused when you work.
An option would be to pick a different colour for each space. This may help you give meaning to the spaces.

## 3. Window manager

### 3.1 Install an additional window manager

MacOS already has a built-in window manager that helps organise several windows in a space. This embedded window manager can be enhanced by installing additional software that will add additional features on top of the existing ones.

At this point, one can go all-in and drastically change the default macOS behaviour with a tiling window manager like [Amethyst](https://ianyh.com/amethyst/) (`brew install --cask amethyst`). In this case, I would configure it to enable 10px window margins and resize windows using the mouse.

I am not that kind of engineer, though. Personally, I picked a lighter option which is [Rectangle](https://rectangleapp.com/) (`brew install --cask rectangle`). It just works and doesn't conflict with the existing macOS window manager.

### 3.2 Reduce motion and transparency

The fancy animations are cool, I know. But they are slow and distracting.
We can live without them. In system preferences, go to:

- Accessibility
  - Display
    - Check "Reduce motion": the space switch animation is now quicker
    - Check "Reduce transparency": it also looks better with a single-color wallpaper

### 3.3 Switch between windows

That is what I really dislike about macOS, at least until Monterey. Whan an application creates more than one window, it is not direct to select a specific window using the keyboard.
I mean, you can do it... but it sucks. In detail, first, you have to select the app with the `Command + tab`, then press `arrow down`, and then select the app window. If you already have that app focus, you may use `Command + `, but I still don't like it!

I suggest using [AltTab](https://alt-tab-macos.netlify.app/) (`brew install --cask alt-tab`), which brings the power of Windows's "alt-tab" window switcher to macOS. Nothing revolutionary, really!
I did a little step further and configured AltTab to be activated with `Command` instead of `Alt` for two reasons. The first one is that `Alt` is the default [compose key](https://en.wikipedia.org/wiki/Compose_key). The second reason is to completely replace the macOS app switcher that, at this point, is not needed anymore. To do that, right-click the AltTab menubar icon and:

- Preferences
  - Controls
    - Shortcut 1
      - Use `command+tab` as activating shortcut
    - Shortcut 2
      - Use `` command+` `` as activating shortcut

If you'd like to have a minimalist and faster AltTab, you may hide the window thumbnail preview feature.

## 4. Dock

### 4.1 Mimic other OSes window minimization

Usually, in Linux/Windows the windows are minimized in the original app icon that is visible in the main bar. The dock can behave in a similar way, just go to the system preferences and select:

- Dock & Menu Bar
  - Check "Minimize windows into application icon".

### 4.2 Assign apps to spaces

MacOS allows the assignment of an app to a specific space. This is a valuable feature if you usually open a set of apps at a start-up (I think everyone does it) and want them to be opened in the space you want. To select a space for an app:

- Open the app in the space you use for it
  - right click on the app dock icon
    - select: option > assign to "this Desktop".

I don't think other desktop environments have this feature. It is extremely useful, though.

### 4.3 Launching apps

Spotlight is great to launch apps. But there is another launcher that is even cooler: it is [Alfred](https://www.alfredapp.com/) (`brew install --cask alfred`).
Like I did with AltTab, I configured Alfred to be activated with `Command` key in order to completely replace Spotlight. To do that, go to the:

- Preferences
  - General
    - Configure `command+space` as a shortcut: it will replace Spotlight

Hint: using an app launcher will allow you to autohide the dock (`Option+Command+D`). You won't need it.

## 5. Other utilities

### 5.1 Clipboard history

[Clipy](https://github.com/Clipy/Clipy) (`brew install --cask clipy`) is a clipboard extension app for macOS. It keeps the clipboard history in plain text like my beloved [Klipper](https://userbase.kde.org/Klipper).

### 5.2 Keep the menubar tidy

In this post, I tried to keep out whatever is related to the look and feel because everyone has different tastes. But MacOS menubar often has lots of tray icons on the right and, at least for some apps, several menu items on the left. Those two sets may meet in the mid-ish and some icons may be impacted.
[Dozer](https://github.com/Mortennn/Dozer) (`brew install --cask dozer`) doesn't solve this issue but reduces it by hiding the menubar icons that are not always necessary. In my specific setup, I configured:

- `clipy` and `spaceid` icons to be always visible.  
- To automatically hide the other menubar icons after 10 seconds

## 6. The terminal is your friend

Whenever possible, I prefer using terminal-based apps as opposed to GUI apps. I am not covering here the several apps, but for sure you need a great terminal emulator to do that. MacOS default terminal app isn't that bad at all. A powerful alternative would be [iTerm2](https://iterm2.com/): as per its documentation, it "brings the terminal into the modern age with features you never knew you always wanted" and I agree. For sure, it has a very cool keyboard shortcuts that will speed up your work.

### 6.1 Display function keys on the Touch Bar

It is convenient to always display function keys on the Touch Bar for the terminal app.
This configuration is per app. I did it for the `Terminal` app:

1. Go to Apple > System Preferences
2. Select the Keyboard preference pane
3. Click on the Shortcuts tab
4. In the left sidebar, select the Function Keys option
5. On the right-hand side click on the plus + button
6. Select the `Terminal` app
7. Add the app

Now the MacOS default terminal always displays the function keys. You can have the same preferences for other apps (iTerm, IDE, etc).
