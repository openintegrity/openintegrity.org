# Medatada

## Project

### Project identifier

> There are binary artifacts that in fact contain several projects. There are projects that are in fact dependent on other binaries running elsewhere (server, or peers). A project is the high level thing. This is hard but we start simply with our 5 and go in more detail as we need. Is it going to enlarge the metric space if we add details? See [thoughts about scale](../architecture/scale).

:[](/schema/measurement/meta/project/id)

### Project name

> This should probably be composed of an official name, as well as aliases or other commonly used names.

:[](/schema/measurement/meta/project/name)

### Project owner

> This can be an organisation, a group or individual. Owner identifier (opencorporate id | group | individual ). Not impossible that there would be multiple owners.

:[](/schema/measurement/meta/project/owner)

### Project website

> There are probably sites in many languages. 

:[](/schema/measurement/meta/project/website)

### Project Documentation [?]( "Not in the original metrics sheet")

> Possibly many types (User documentation or manual, administrators' manual, technical documentation, architecture documentation, protocol or schema documentation, api documentation...)

:[](/schema/measurement/meta/project/documentation)

### Project code repositories

> Project would be generally composed of multiple repository. Either because they're made of multiple components, or because they have variations based on platforms, or other factors (community version, censored version,...). Not easy to differentiate a component from a library... But probably from an OII standpoint it doesn't matter (i.e. it's just a label). Some components are reusable across platforms.

> Components (i.e. what if its clear that it has a closed source server side component? Use Placeholders until evidence helps determine actual component structure). 

:[](/schema/measurement/meta/project/repositories)

### Project download link / service end-point

:[](/schema/measurement/meta/project/download)

### Project issue tracker

:[](/schema/measurement/meta/project/issues)

### Project current release version

:[](/schema/measurement/meta/project/releases/latest)

### Project Dependencies

> This might require a graph data structure. This is important but can have significant [scale sensitivity](../architecture/scale.md) consequences. In the big picture dependencies need to be typed (code, runtime, remote, os, device, protocols,...). Code is a low hanging fruit for open source. OS, Device can be simple properties for now. 

## Platforms

> Do we need all compilation targets?? For now start with top level platforms, go more detailed when needed.

 - Windows
 - OSX
 - Linux
 - Android
 - iOS


