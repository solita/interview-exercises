(ns clojure-project.core-test
  (:require [clojure.test :refer :all]
            [clojure-project.core :refer :all]))

(deftest foo-test
  (testing "When given Heikki it returns Hello Heikki"
    (is (= (foo "Heikki") "Hello Heikki")))
  (testing "When given Sauron it does not greet Heikki"
    (is (not= (foo "Sauron") "Hello Heikki"))))
