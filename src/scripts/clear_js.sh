
COMMIT_HASH=$(git rev-parse HEAD)
JS_FILE=./build/$COMMIT_HASH/scripts/main.js
echo "cleaning file $JS_FILE"
sed -i ''  's/window\?\.PointerEvent/window.PointerEvent/g' $JS_FILE
sed -i '' 's/window\?\.TouchEvent/window\.TouchEvent/g' $JS_FILE
sed -i '' 's/window.PointerEvent\?\?null/(window.PointerEvent ? window.PointerEvent : null)/g' $JS_FILE
sed -i '' 's/window.TouchEvent\?\?null/(window.TouchEvent ? window.TouchEvent : null)/g' $JS_FILE
sed -i '' 's/window.TouchEvent\?\?null/(window.TouchEvent ? window.TouchEvent : null)/g' $JS_FILE
sed -i '' 's/a??r.CancelledByRelease/(a ? a : r.CancelledByRelease)/g' $JS_FILE
sed -i '' 's/\([a-zA-Z]\)?.\(([a-zA-Z],{context:[a-zA-Z]})\)/(\1 ? \1\2 : null)/g' $JS_FILE
sed -i '' 's/\([a-zA-Z]\)\?\.\(([a-zA-Z],{context:[a-zA-Z],reason:([a-zA-Z] \? [a-zA-Z] : [a-zA-Z].CancelledByRelease)})\)/(\1 ? \1\2 : null)/g' $JS_FILE
sed -i '' 's/?\(\.[0-9]+\)/(? 0.\1)/g' $JS_FILE

echo "running at ./build/index.html"