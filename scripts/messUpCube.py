import bpy

# move the vertex
bpy.data.meshes[0].vertices[0].co.x += 2

# save the file (using the same filepath it already has)
# bpy.ops.wm.save_as_mainfile(filepath=bpy.data.filepath)