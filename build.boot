(set-env!
 :dependencies '[[adzerk/boot-cljs          "2.0.0"]
                 [adzerk/boot-reload        "0.5.1"]
                 [hoplon/boot-hoplon        "0.2.1"]
                 [hoplon/hoplon             "6.0.0-alpha16"]
                 [org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.9.518"]
                 [tailrecursion/boot-jetty  "0.1.3"]
                 [org.clojars.happy-lisper/hoplon-revealjs "0.1.6-SNAPSHOT"]]
 :source-paths #{"src"}
 :asset-paths  #{"resources/assets"})

(require
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build for local development."
  []
  (comp
   (watch)
   (speak)
   (hoplon)
   (sift :add-jar {'org.clojars.happy-lisper/hoplon-revealjs #"reveal.js"})
   (reload)
   (cljs)
   (target)
   (serve :port 8000)))

(deftask prod
  "Build for production deployment."
  []
  (comp
   (hoplon)
   (sift :add-jar {'org.clojars.happy-lisper/hoplon-revealjs #"reveal.js"})
   (cljs :optimizations :advanced)
   (target)))
