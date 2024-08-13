
COMMIT=556c282ce8fddd802fb5bf0ebc77ae0edcda6173
JS_FILE=./build/$COMMIT/scripts/main.js
echo "cleaning file $JS_FILE"
sed -i ''  's/window\?\.PointerEvent/window.PointerEvent/g' $JS_FILE
sed -i '' 's/window\?\.TouchEvent/window\.TouchEvent/g' $JS_FILE
#sed -i '' 's/s\?\.(a/s(a/g' $JS_FILE
#sed -i '' 's/u\?\.(t/u(t/g' $JS_FILE
#sed -i '' 's/A\?\.(t/A(t/g' $JS_FILE
#sed -i '' 's/I\?\.(t/I(t/g' $JS_FILE